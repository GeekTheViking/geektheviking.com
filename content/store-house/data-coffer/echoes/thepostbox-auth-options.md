---
title: "ThePostBox — Portal Authentication Options"
description: "Comparing login and identity solutions for the ThePostBox.EU portal. Which fits our sovereignty model?"
date: 2026-05-11T08:30:00+00:00
tags: ["postbox", "auth", "sso", "identity", "gtv"]
type: "ekko"
author: "GTV"
draft: false
---

The portal is live at thepostbox.eu. Now it needs a real front door — not a mock login that drops you straight into the dashboard. Here are the options.

---

**Option 1 — Authentik**  
Self-hosted identity provider. OIDC/OAuth2. SAML. Social login. MFA. Full user management UI. Integrates with Seafile, Mailcow, and any future service via standard protocols. Heavy (Docker stack), but this is the one that scales to the full PostBox vision — one login for everything.  
→ *Best long-term fit. Set it up once, use it everywhere.*

**Option 2 — Authelia**  
Lighter. Designed to sit in front of a reverse proxy (Traefik). 2FA support. Simpler than Authentik — fewer features, smaller footprint. Does not integrate as cleanly with Seafile/Mailcow via OIDC.  
→ *Good if we only need to protect the portal. Not a full SSO solution.*

**Option 3 — Pangolin SSO**  
Already in the stack. Protects resources at the tunnel level. Quick to enable — just toggle Access Controls per resource. Not standard OIDC, so Seafile/Mailcow cannot use it as identity provider.  
→ *Fastest win right now. Too limited for the full vision.*

**Option 4 — Zitadel**  
Modern OIDC platform. Self-hosted. Better UI than Keycloak. Actively developed. Similar weight to Authentik. Less community adoption in the self-hosted space.  
→ *Worth watching. Not the obvious choice today.*

**Option 5 — Custom JWT / session auth**  
Full control. Build it ourselves. Only justified if we need behavior that no existing solution provides.  
→ *Not now. Possibly never.*

---

**Recommendation: Authentik**

One identity layer for the entire PostBox ecosystem — portal, Seafile, Mailcow, PROSTEIN AI, future services. Users log in once. We manage one user database. Runs on our hardware, in our jurisdiction.

The PostBox promise is that *you* own your digital address. That starts with owning the authentication.

---

> "The front door is as important as the house behind it."
