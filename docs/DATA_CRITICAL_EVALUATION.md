# Data Evaluation — Synthetic Utilities Dataset (`x_snc_util_da_*`, ServiceNow demo instance)

**Verdict: this dataset supports real supervised classification.** It replaces the original `x_snc_energy_custo_*` demo tables (60 NMIs, 14-17 with full transactional coverage, no label column — see git history for that evaluation). This one was generated specifically to fix every gap found there.

Source: `x_snc_util_da_*` scoped app tables, loaded via `fluent-app/scripts/generate-and-load.mjs`. 12 named personas seeded from `Utilities Use Case/scenario-manifest.md` (Angus Young, Paul McCartney, John Lennon, Ringo Starr, George Harrison, Eric Clapton, Mark Knopfler, David Gilmour, Elton John, Malcolm Young, Billy Gibbons, Johnny Cash) plus 486 synthetic customers.

## Volume — full coverage, no join attrition
| Table | Rows | Distinct NMIs |
|---|---|---|
| `customer` | 498 | — |
| `property` | 498 | — |
| `nmi` | 500 | 500 (all) |
| `usage` | 365,000 | 500 (all, daily × 24 months) |
| `billing` | 12,000 | 500 (all, monthly × 24 months) |
| `meter_read` | 12,000 | 500 (all, monthly × 24 months) |
| `solar_export` | 2,760 | ~115 (NMIs flagged `_solar` at generation time) |

Every NMI has full `usage`/`billing`/`meter_read` coverage across the full 24-month window — no attrition on join. This is the fully-joined cohort size for any per-NMI model: **500**, not 14.

## Ground-truth labels exist
`x_snc_util_da_nmi.hardship_flag` and `x_snc_util_da_nmi.tamper_flag` (both `Boolean`) are real target columns, not proxies. They're not copied directly into any single feature — they're the **hidden cause** behind correlated downstream patterns baked into the transactional tables at generation time:

- **`hardship_flag = true`** → elevated baseline daily usage (16-22 kWh vs 9-15 kWh normal) + 55%/month chance of `billing.status = 'overdue'`.
- **`tamper_flag = true`** → one deliberate register rollback in `meter_read` (`reading_kwh` decreases between consecutive reads for the same NMI) + a 2-4 month near-zero usage window while `nmi.status` stays `'active'` (bypass signature).
- Base rates in the 486 synthetic customers: `hardship` 8%, `tamper` 5%. Named personas have explicit flags per persona (e.g. Angus Young = hardship, Mark Knopfler = tamper).

This means `overdue_bill_count`, `total_consumption_kwh`, `any_register_rollback`, and `usage`-dip window flags are legitimate downstream features correlated with — not restatements of — the label. No leakage.

## Categorical data is clean
- `billing.status` choices are a fixed enum (`current`/`paid`/`overdue`/`credit`/`final_bill`/`disputed`) enforced by the table schema — no case-inconsistent duplicates possible.
- `nmi.tariff` (`flat`/`tou`/`demand`), `nmi.connection_type` (`single_phase`/`three_phase`), `nmi.status` (`active`/`disconnected`/`pending`), `meter_read.read_type` (`actual`/`estimated`), `customer.customer_type` (`residential`/`business`) — all schema-enforced choice fields.

## NMI attributes are fully populated
`dnsp`, `connection_type`, `installed_capacity_kw`, `fit_rate`, `tariff`, `status`, `connection_date` are set on every one of the 500 rows (`installed_capacity_kw`/`fit_rate` are `0` for non-solar NMIs, not null — check for `0` not `NULL` when filtering solar cohort).

## Bottom line
- **n = 500** fully-joined NMIs, 24 months of transactional history each — sufficient for train/test split and Pyramid's native Weka-based classifiers (KNN, Random Forest, SVM, etc.).
- **Real binary labels** (`hardship_flag`, `tamper_flag`) — this is genuine supervised classification, not rule-dressed heuristics.
- **Clean categoricals**, **fully populated NMI attributes** — no normalization pass required before modeling.
- Deterministic formula-based scoring (see `ENERGY_RISK_PIPELINE_SPEC.md`) is still worth building alongside the classifier — not because the data can't support ML, but because an auditable rule-based score and a trained model serve different governance purposes (explainability vs. predictive accuracy). Build both; compare.
