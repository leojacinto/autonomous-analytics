# Utilities Analytics: Risk Scoring Data Flow Spec (`x_snc_util_da_*`), NATIVE ONLY

Module: everything below runs in Model Pro → Data Flow.

Relationships already built in Data Model (verified): `x_snc_util_da_nmi.sys_id` ⟷ `x_snc_util_da_billing.nmi`/`x_snc_util_da_usage.nmi`/`x_snc_util_da_meter_read.nmi`/`x_snc_util_da_solar_export.nmi`, `x_snc_util_da_property.sys_id` ⟷ `x_snc_util_da_nmi.property`, `x_snc_util_da_customer.sys_id` ⟷ `x_snc_util_da_property.customer`.

Key fact enabling full native: `x_snc_util_da_meter_read.previous_reading_kwh` is already a populated column (generator writes it per-row). Rollback detection uses this directly, no lag/shift step required.

---

### Stage 1: Calculated Column nodes on each raw child table (row-level flags, pre-aggregate)

`Column Operations` tab → `Calculated Column` node → connect to each `Table` node. Script box = PQL expression, `Calculate Column Name` = new column name, `Calculate Column Type` = `Integer`.

**1a. Billing**: `IF([status] = "overdue", 1, 0)` → `is_overdue`

**1b. Usage**: `IF([interval_kwh] < 1, 1, 0)` → `is_near_zero_day`

**1c. Meter Read**: `IF([reading_kwh] < [previous_reading_kwh], 1, 0)` → `is_rollback`

**1d. Solar Export**: skip to Stage 2, no row-level flag.

### Stage 2: `Summarize` node, one per child table, group by `nmi`

`Preparation` tab → `Summarize` node → connect to each Stage 1 output. The `Summarize` grid only outputs columns you explicitly add via `Add Column`.

**2a. Billing**. Resulting Table Name = `billing_per_nmi`.
- `nmi` Group By → `nmi`
- `is_overdue` Sum → `overdue_bill_count`
- `amount` Sum → `total_billed`
- `amount` Average → `avg_bill_amount`
- `bill_date` Count → `bill_count`

**2b. Usage**. Resulting Table Name = `usage_per_nmi`.
- `nmi` Group By → `nmi`
- `interval_kwh` Sum → `total_consumption_kwh`
- `interval_kwh` Average → `avg_daily_consumption_kwh`
- `interval_kwh` Min → `min_daily_kwh`
- `is_near_zero_day` Sum → `near_zero_day_count`
- `usage_date` Count → `usage_row_count`

**2c. Meter Read**. Resulting Table Name = `meter_read_per_nmi`.
- `nmi` Group By → `nmi`
- `is_rollback` Max → `any_rollback`

**2d. Solar Export**. Resulting Table Name = `solar_per_nmi`.
- `nmi` Group By → `nmi`
- `export_kwh` Sum → `total_export_kwh`
- `export_kwh` Average → `avg_monthly_export_kwh`

### Stage 3: Join everything into one flat table

`Join` tab → 6 chained `Join` nodes, Left Outer, Preview after each. `x_snc_util_da_nmi`, `x_snc_util_da_property`, `x_snc_util_da_customer` below are the raw, unaggregated `Table` nodes from Stage 0. Each Join node's output feeds into the Left input of the next Join node.

**Join 1**. Resulting Table Name = `nmi_billing`. Left = `x_snc_util_da_nmi` (raw `Table` node). Right = `billing_per_nmi` (Stage 2a output).
- On: `nmi = nmi`

**Join 2**. Resulting Table Name = `nmi_billing_usage`. Left = `nmi_billing`. Right = `usage_per_nmi` (Stage 2b output).
- On: `nmi = nmi`

**Join 3**. Resulting Table Name = `nmi_billing_usage_meter`. Left = `nmi_billing_usage`. Right = `meter_read_per_nmi` (Stage 2c output).
- On: `nmi = nmi`

**Join 4**. Resulting Table Name = `nmi_billing_usage_meter_solar`. Left = `nmi_billing_usage_meter`. Right = `solar_per_nmi` (Stage 2d output).
- On: `nmi = nmi`
- Left Outer. Most NMIs have no solar rows, so `total_export_kwh` is null there rather than zero.

**Join 5**. Resulting Table Name = `nmi_billing_usage_meter_solar_property`. Left = `nmi_billing_usage_meter_solar`. Right = `x_snc_util_da_property` (raw `Table` node).
- On: `property = sys_id`. `x_snc_util_da_nmi.property` is the foreign key to `x_snc_util_da_property`. Joining on `nmi` instead returns null for property-sourced fields (`address`) while nmi-native fields (`tariff`, `dnsp`, `fit_rate`) still populate since they don't need this join.

**Join 6**. Resulting Table Name = `nmi_risk_flat`. Left = `nmi_billing_usage_meter_solar_property`. Right = `x_snc_util_da_customer` (raw `Table` node).
- On: `customer = sys_id`

Carries forward: `hardship_flag`, `tamper_flag`, `status`, `installed_capacity_kw`, `fit_rate`, `tariff`, `connection_type`, `dnsp`, `property_type`, `customer_type`, `customer_name`.

### Stage 4: Deterministic score, `Calculated Column` node on the merged table

`Column Operations` tab → `Calculated Column` node. Neither branch references the other's columns, so fork both branches directly off the `nmi_risk_flat` output instead of chaining them in one long line. One node per bullet below, chained in order within each branch (each node's output feeds the next node's input in that branch). Each node has one Script box and one `Calculate Column Name` field, so it produces exactly one output column.

**Hardship branch** (4 nodes, chained, connects to `nmi_risk_flat` output)
- `hardship_overdue_flag` = `Case([overdue_bill_count] >= 2, 1, 0)`
- `hardship_usage_flag` = `Case([avg_daily_consumption_kwh] > 15, 1, 0)`
- `hardship_affordability_flag` = `Case([total_consumption_kwh] > 0 and [total_billed] / [total_consumption_kwh] > 0.45, 1, 0)`
- `hardship_risk_score` = `[hardship_overdue_flag] + [hardship_usage_flag] + [hardship_affordability_flag]`. Output Option = Create New Table (`nmi_risk_scores_hardship`).

**Tamper branch** (3 nodes, chained, connects to `nmi_risk_flat` output)
- `tamper_register_rollback_flag` = `IfNull([any_rollback], 0)`
- `tamper_active_dormant_flag` = `Case([status] = "active" and [min_daily_kwh] < 1, 1, 0)`
- `tamper_solar_shortfall_flag` = `Case([installed_capacity_kw] > 0 and IfNull([total_export_kwh], 0) / [installed_capacity_kw] < 50, 1, 0)`
- `tamper_risk_score` = `[tamper_register_rollback_flag] + [tamper_active_dormant_flag] + [tamper_solar_shortfall_flag]`. Output Option = Create New Table (`nmi_risk_scores_tamper`).

Thresholds (`15 kWh/day`, `0.45`, `50 kWh/kW`) are calibratable. Preview and check percentiles of each underlying column before finalizing.

### Stage 5: Native ML classification against the real labels

No join needed between the Hardship and Tamper forks. `Calculated Column` nodes only add columns, they don't drop the columns received from `nmi_risk_flat`. Each branch output already has every `nmi_risk_flat` column plus its own risk score, so each branch is a complete input table for its own classifier.

Two independent classifiers, predicting two different real labels:
- Hardship branch → classifier → predicts `hardship_flag` (boolean column on `x_snc_util_da_nmi`).
- Tamper branch → classifier → predicts `tamper_flag` (boolean column on `x_snc_util_da_nmi`).

`Machine Learning` tab → drag classifier node (`Random Forest`, `KNN`, `Decision Tree`, `SVM`, or `Naïve Bayes`) → one connected to the Hardship branch output, one connected to the Tamper branch output.

Properties panel:
- **Input Columns**: `total_consumption_kwh`, `avg_daily_consumption_kwh`, `min_daily_kwh`, `near_zero_day_count`, `overdue_bill_count`, `total_billed`, `avg_bill_amount`, `any_rollback`, `total_export_kwh`, `installed_capacity_kw`. Exclude `hardship_risk_score`/`tamper_risk_score` from the inputs of the classifier predicting that same flag.
- **Output Classifier**: `hardship_flag` on the Hardship branch node, `tamper_flag` on the Tamper branch node.
- **Running Process Type**: training data volume.
- Check **Save Model** to persist.
- **Resulting Table Name**: `nmi_hardship_predictions` on the Hardship branch classifier, `nmi_tamper_predictions` on the Tamper branch classifier.
- **New output column name**: `hardship_flag_predicted` on the Hardship branch classifier, `tamper_flag_predicted` on the Tamper branch classifier. (Exact Properties panel field labels, verify against your Studio version.)

Train/test split: n=500, hold out ~100 (20%). Class balance: hardship ~8-10%, tamper ~5-6% base rate. Apply class weighting/oversampling if the node handles imbalance manually rather than automatically.

### Stage 6: Peer-cohort outlier flag

`Machine Learning` tab → `Outlier` node → connect to `nmi_risk_flat` output directly (third fork, `total_consumption_kwh` doesn't require either risk branch). Input Columns = `total_consumption_kwh`, stddev threshold = 2 or 3, add new column, name `usage_outlier_flag`. Resulting Table Name = `nmi_usage_outliers`. Connect a `Target` → `In Memory` node to this node's output to land the table (same pattern used on the Hardship/Tamper classifier outputs).

Check whether the node supports grouping by `property_type`/`dnsp` (cohort-relative) or only flat whole-column stddev. If only flat stddev, filter upstream and run separate Outlier nodes per cohort.

---

## Unconfirmed, verify in Studio on first use

- `Case`/`IfNull` argument order and UI field layout for multi-condition `Case`.
- Whether precision/recall/AUC is a built-in output for native Weka-based classifier nodes, may need a separate validation step comparing predictions against held-out `hardship_flag`/`tamper_flag`.
- Whether the `Outlier` node supports a group-by/partition input.

## Gotchas encountered while building this

- **`Tables` (multi-select) node connects only to source and target directly.** It has no connection option to Column Operations/Join/ML nodes. Use `Add Tables` (individual `Table` node per table) instead.
- **Joins create duplicate columns with `_1`/`_2`/`_3` suffixes** (`nmi_1`, `nmi_2`, `nmi_3`, `sys_created_by_1`, etc). Each Join keeps both sides' `nmi` column when neither side has been renamed pre-Join. This is cosmetic clutter, safe to clean up. Deselect the duplicates in `Column Selection` on the final Join node, keep one `nmi` per join key.
- **`Summarize` output missing `nmi` for the Join step.** Only columns explicitly added to the `Summarize` grid pass through. Add `nmi` with `Group By` for it to appear as a Join key option downstream. Check every `Summarize` node's grid for an `nmi` `Group By` row before moving to Stage 3.
- **`Output columns missing in .` error on the target node** (blank table name in the error text, `Target Tables` grid shows blank `Schema`/`Table` cells for some rows). UI bug. Fix: delete and redraw the connector edge from the affected `Table` node to the `In Memory` target node.
- **All 6 Joins in Stage 3 must be set to `Left Outer Join` explicitly.** Default `Join Type` may not be Left Outer. Check the `Join Type` dropdown on every Join node, not just Join 4.
- **Join key must be the actual foreign key column, not `nmi`.** For Join 5 (property), the correct key is `x_snc_util_da_nmi.property` = `x_snc_util_da_property.sys_id`, not `nmi`. `nmi` on the aggregate chain (Stage 2 outputs) is a 32-char sys_id GUID resolved from the child tables' `nmi` reference field, it is not related to the property FK. Same pattern for Join 6 (`customer` = `sys_id`).
- **`Preview` on an individual node can show stale/cached data.** If columns show unexpectedly null after a join key fix, re-run the full flow (`Execution`/`Run`) before concluding the join itself is broken.
- **Check the raw `Table` node's connection before debugging join logic.** If a `Table` node is pointed at the wrong ServiceNow instance (e.g. target instance instead of source), every join through it returns nulls despite a correct join key. Confirm via the node's connection properties, or by cross-checking row counts/values against a direct ServiceNow REST query.

### Stage 7: Discover charts on the landed prediction tables

Do this after the flow run succeeds and `nmi_tamper_predictions`/`nmi_hardship_predictions`/`nmi_usage_outliers` exist in the In Memory DB. UI labels can differ by version.

**Worklist vs model-validation views**

The confusion matrix and risk-score histogram below validate the classifier. The analyst deliverable is the worklist: a filtered, sortable list of flagged NMIs with context to act on (call the customer, dispatch a field check, etc).

**Risk worklist (build this first)**
1. Add a new visual: `Grid`/`Table`.
2. Source: `nmi_tamper_predictions` (repeat as a second grid sourced from `nmi_hardship_predictions`).
3. Add a filter: `tamper_flag_predicted` = `true` (only show cases the model actually flagged, not the whole book).
4. Columns to show: `nmi`, `address`, `customer_name`, `tariff`, `tamper_risk_score`, `any_rollback`, `total_export_kwh`, `installed_capacity_kw`, `dnsp`.
5. Sort by `tamper_risk_score` descending, worst cases at the top.
6. Repeat with `hardship_flag_predicted` = `true` on the Hardship grid, columns: `nmi`, `address`, `customer_name`, `overdue_bill_count`, `total_billed`, `avg_daily_consumption_kwh`, `hardship_risk_score`.

**Setup**
1. Content Explorer (left nav): find the In Memory DB model these tables landed in (same model tree the flow's `Target` nodes point at).
2. New: `Illustration` (or `Discover` panel, may be labeled `New Discover Board` depending on version) on that model.
3. This opens the Discover canvas with `Dimensions` and `Measures` panels on the left, chart canvas in the center.

**Confusion matrix, Tamper branch**
1. Add a new visual: pick a `Grid`/`Table` or `Heat Grid` visual type from the visual picker (bottom-left icon strip in Discover, or right-click canvas: `Add Visualization`).
2. Drag `tamper_flag` (the real label) into Rows.
3. Drag `tamper_flag_predicted` into Columns.
4. `nmi` is a dimension, not a measure, so it can't go in the Values well. Drag `total_consumption_kwh` (a real measure) into Values instead, set its aggregation to `Count` (right-click the field in the well: `Aggregation` > `Count`, or use the count icon next to it). `Count` aggregation counts non-null rows regardless of which column you pick, so this gives the row count per cell.

**Confusion matrix, Hardship branch**
1. Repeat the same 4 steps above in a second visual on the same canvas.
2. Swap `tamper_flag`/`tamper_flag_predicted` for `hardship_flag`/`hardship_flag_predicted`, sourced from `nmi_hardship_predictions`.

**Risk score distribution, Tamper branch**
1. Add a new visual: `Bar Chart`.
2. Drag `tamper_risk_score` into the axis/category well (X-axis).
3. Drag `total_consumption_kwh` into Values, aggregation `Count`.
4. Drag `tamper_flag_predicted` into the Color/Legend well to split bars by predicted class.

**Risk score distribution, Hardship branch**
1. Repeat the same 4 steps above in a second visual.
2. Swap `tamper_risk_score`/`tamper_flag_predicted` for `hardship_risk_score`/`hardship_flag_predicted`, sourced from `nmi_hardship_predictions`.

**Save**
1. Save the board (top toolbar `Save`), name it `Energy Utilities - Risk Model Validation`.

## Progress

Stage 1–4 built and validated. Tamper branch classifier trained, predictions landed to `nmi_tamper_predictions`. Remaining: Hardship branch classifier + target node, Stage 6 outlier node + target node.
