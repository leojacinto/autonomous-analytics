# ServiceNow SQL API / Pyramid Connection — Access Setup

SQL API requires a plugin, a role, per-table ACLs, and an IP allowlist. Connection string format: `jdbc:servicenow://https://<instance>.service-now.com`.

## 1. Check/install the SQL API plugin
- ServiceNow → **System Definition** → **Plugins** (Plugin Manager) → search `SQL API`.
- **Active** → not the blocker, go to step 2.
- **Inactive/Not Installed** → Install/Activate. On sub-prod/demo instances this can be gated and require a HI Support request even for admins, if the Install button is greyed out or errors, that's the tell.

## 2. Role
- System Security → Users → the Pyramid service account → assign `sn_jdbc_rest_access` (or `sn_odbc_rest_access`).

## 3. ACLs
- For each source table (`x_snc_util_da_customer`, `x_snc_util_da_property`, `x_snc_util_da_nmi`, `x_snc_util_da_usage`, `x_snc_util_da_billing`, `x_snc_util_da_meter_read`, `x_snc_util_da_solar_export`): create an ACL with operation `egress_sql`, and confirm the existing `read` ACL already grants the service account access.

## 4. IP allowlist
- ServiceNow → System Security → **Authentication Policies** → **SQL API Authentication Policy** → **Policy Inputs** → the Pyramid service account → **IP Range** tab.
- Add a row: start = end = Pyramid's outbound/egress IP.
- Do not assume the DNS-resolved IP for your Pyramid hostname is the correct value, that's the inbound IP, not necessarily the outbound/egress IP. Cloud setups often differ between the two.
- Get the actual outbound IP from Pyramid Admin Console or Pyramid support/hosting provider. If it still fails after adding the correct IP, re-check steps 1-3.

## Fastest way to know which branch you're on
Check step 1 first: what does Plugin Manager show for "SQL API"? Active, Inactive, or not listed at all decides which of steps 2-4 are actually relevant.
