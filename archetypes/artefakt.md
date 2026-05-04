<!-- 
  GTV Data-Varder | Artefakt
  ================================
  Format: Hugo Standard
  - Indhold skrives i BODY (under den sidste ---)
  - IKKE i front matter content: feltet
  - Se: https://gohugo.io/content-management/formats/
  Author: GTV | License to Exploit
-->
---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
type: "artefakt"
tags: []
date: {{ .Date }}
author: "GTV"
draft: false
---

<!-- Skriv dit indhold her (Hugo Standard body) -->
