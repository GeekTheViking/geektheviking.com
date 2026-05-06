---
title: "SSH — Secure Shell Protocol"
description: "Tatu Ylönen's protocol that made secure remote access possible."
date: 2024-01-30
tags: ["ssh", "protocol", "security", "linux", "sysadmin"]
type: "artefakt"
author: "GTV"
draft: false
---

In 1995, Tatu Ylönen — a Finnish researcher at Helsinki University of Technology — discovered his university network had been sniffed. Passwords were being stolen over the wire in plaintext.

He spent three months building a solution. SSH 1.0 was released in July 1995. Within a few months, 20,000 users in 50 countries had installed it.

SSH replaced telnet, rsh and rlogin overnight. Every server administrator in the world now types `ssh` as naturally as breathing.

> `ssh jan@homelab` — and you're in.

It is the quiet foundation of every homelab, every cloud server, every deployment pipeline on earth. You never think about SSH until it's not there.

Ylönen gave SSH 1.x away for free. OpenSSH — the open-source implementation — has shipped with virtually every Unix and Linux system since 1999.
