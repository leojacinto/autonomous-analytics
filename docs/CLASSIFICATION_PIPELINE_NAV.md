# Classification Pipeline — Navigation Baseline (`x_snc_util_da_*`)

Confirmed against Pyramid's own docs (`OpenEditDirectModel.htm`, `ModelPro.htm`, `DataFlowInterface.htm`). No scripting, no LLM in this navigation — pure native Data Flow/Data Model UI.

Target model: point the `ServiceNow` source node at `x_snc_util_da_customer`, `property`, `nmi`, `usage`, `billing`, `meter_read`, `solar_export` (500 NMIs, real `hardship_flag`/`tamper_flag` labels — see `DATA_CRITICAL_EVALUATION.md`). This is a fresh model build, not a rebuild of the old `Energy Utilities` model on `x_snc_energy_custo_*`.

## 0. Get into the Data Flow editor

1. Go to **My Content** (left App Toolbox on the Home page).
2. Open (or create) the model's definition file — this opens in **Model Pro**.
3. Inside Model Pro, four module tabs are available: `Master Flow`, `Data Flow`, `Data Model`, `Security`.
4. Click **`Data Flow`**. Add the `ServiceNow` source node if not present, point it at the ServiceNow connection, select all 7 `x_snc_util_da_*` tables via `Add Tables`.

## 1. Relationships (Data Model → Tables tab — NOT Data Flow Join nodes)

Table-to-table matching for Discover/query purposes is handled by **relationships** in the Data Model module, not by manual `Join` nodes in Data Flow. Data Flow `Join` nodes physically flatten tables into one wide table (ETL-side, needed for the scripting pipeline in `ENERGY_RISK_PIPELINE_SPEC.md`); Data Model relationships just link tables logically for querying in Discover.

1. In Model Pro, click **`Data Model`**.
2. Left Elements panel → **`Tables`** tab.
3. Correct relationships (join on `sys_id`, not `nmi_number`/`external_id` — ServiceNow `ReferenceColumn` fields store the referenced record's `sys_id`): `nmi.sys_id` ⟷ `usage.nmi`, `billing.nmi`, `meter_read.nmi`, `solar_export.nmi`; `property.sys_id` ⟷ `nmi.property`; `customer.sys_id` ⟷ `property.customer`.
4. **Known failure mode — auto-detection will get this wrong.** Pyramid's default heuristic matches identical column *names* across tables. Since `billing.nmi`, `usage.nmi`, `meter_read.nmi`, `solar_export.nmi` are all literally named `nmi`, auto-detection cross-links those four tables **to each other** (spurious) instead of to the actual `nmi` table (whose key is `sys_id`, not `nmi`) — leaving `nmi` and `property` completely orphaned in the model. Delete any auto-generated relationship directly between two child tables (e.g. `meter_read` ⟷ `solar_export`), then add all 6 relationships in Step 3 manually: right-click the reference column on the child/owner-side table → `Add Relationship` → select the target table and `sys_id`.
5. Click any join line → Properties panel → check **Join Type** — all of these are one(`nmi`)-to-many(`usage`/`billing`/`meter_read`/`solar_export`) except `property`→`customer` and `nmi`→`property` which are also one-to-many.
6. Ribbon → **`Validate Joins`** → green = valid, orange = broken with explanation.

## 2. Aggregation and target label

Measures/aggregations (sum/avg/count) are definable per-table in Data Model's **`Columns`** tab. For classification, the nominal target already exists as a native `Boolean` column — `nmi.hardship_flag` / `nmi.tamper_flag` — no calculated proxy column needed here, unlike the old dataset which had no label at all.

## 3. Machine Learning classification node

`Machine Learning` nodes live in **Data Flow**, which needs its own `Join` chain (see `ENERGY_RISK_PIPELINE_SPEC.md` Stage 2) to produce one flat per-NMI table before an ML node can consume it — Data Model relationships (Section 1) only govern Discover-time querying, not Data Flow processing.

1. **Elements panel** → `Machine Learning` tab.
2. Drag one of the native classifiers: `KNN`, `Naïve Bayes`, `Decision Tree`, `Random Forest`, `Shallow Neural Net`, `Support Vector Machine (SVM)`.
3. Connect the Stage-2/3 merged table's output → classifier node.
4. Properties panel:
   - **Input Columns**: numeric feature columns (`total_consumption_kwh`, `overdue_bill_count`, `any_rollback`, etc. — see `ENERGY_RISK_PIPELINE_SPEC.md` Stage 4 for the full list).
   - **Output Classifier**: `hardship_flag` or `tamper_flag` (train separate models, one per label).
   - **Running Process Type**: controls training data volume/preview size.
   - Name the new prediction column.
5. Check **Save Model** to persist it as a reusable ML model.
6. Optionally check **Set as Target** to write predictions directly into IMDB.
7. Click **Preview** to validate before finalizing.

## Unconfirmed / flagged

- No documented native train/test split or classification metrics (precision/recall/AUC) for these Weka-based classifier nodes. Plan to validate manually: hold out ~20% of the 500 NMIs, compare predicted vs actual `hardship_flag`/`tamper_flag` in a separate Select/Calculated Column step.
- Whether the `Outlier` ML node supports a group-by/partition input — needs verification in Studio.

## ServiceNow JDBC rate limit — re-check before first full processing run

Previously hit `Rate limit exceeded: 600 requests per hour for JDBC Rest connector` against the old dataset (340 total rows across 7 tables). The new dataset is far larger (365,000 usage rows alone) — if the Data Flow paginates per-table pulls, this limit is a bigger risk here, not a smaller one. Before the first full Data Flow processing run:
- Check ServiceNow System Properties / Rate Limiting for the current per-hour JDBC REST limit and whether it can be raised for the `pyramid_svc` account.
- Check the Pyramid ServiceNow connector's batch/page size setting — larger pages mean fewer requests for the same row count.
- If reprocessing repeatedly during development, stagger runs rather than re-triggering back-to-back.
