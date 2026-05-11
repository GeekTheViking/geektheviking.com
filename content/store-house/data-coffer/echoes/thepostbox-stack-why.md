---
title: "ThePostBox Stack — Why These Tools"
description: "The reasoning behind each technology choice in the PostBox.EU sovereign digital address project."
date: 2026-05-11T08:00:00+00:00
tags: ["postbox", "stack", "sovereignty", "open-source", "gtv"]
type: "ekko"
author: "GTV"
draft: false
---

Building a privacy-first European digital address means every tool in the stack must earn its place. Here is why we chose what we chose — and what we rejected.

---

**Hugo** — not WordPress, not Ghost, not Webflow.  
Static. No database. No PHP. No attack surface. Version-controlled. Deployable anywhere. The site *is* the repository.

**Seafile** — not Nextcloud, not ownCloud, not Syncthing.  
Faster sync protocol. Lighter footprint. Purpose-built for files. Nextcloud tries to be everything — Seafile does one thing well. ownCloud is Nextcloud's slower cousin.

**Mailcow** — not iRedMail, not Zimbra, not ProtonMail (hosted).  
Dockerized. Active development. Complete stack: Postfix, Dovecot, Rspamd, SOGo. Admin UI that doesn't require a PhD. Self-hosted because we own the keys.

**Hetzner** — not AWS, not Azure, not DigitalOcean.  
EU-based. GDPR jurisdiction. Affordable without being cheap. Not a surveillance economy company.

**Headscale** — not Tailscale SaaS.  
Same WireGuard mesh, own control plane. Our Tailscale keys live on our server, not in Vermont.

**Pangolin + Gerbil** — not Cloudflare Tunnel, not frp.  
Self-hosted reverse tunnel. EU open source. No vendor lock-in. Traffic stays on infrastructure we control.

**Cloudflare DNS** — pragmatic compromise.  
Free, reliable, DDoS protection, excellent API. US company — eyes open. DNS data is already public. Tunnel traffic goes *around* Cloudflare where it matters.

---

> "We didn't pick the popular choice. We picked the sovereign choice."
