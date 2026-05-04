# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start lokal udviklingsserver (live reload)
hugo server

# Byg til docs/ (GitHub Pages deployment)
hugo

# Opret nyt Artefakt (Data-Coffer indhold)
hugo new --kind artefakt store-house/data-coffer/artifacts/navn-her.md

# Opret nyt Ekko (Data-Coffer indhold)
hugo new --kind ekko store-house/data-coffer/echoes/navn-her.md
```

## Arkitektur

Hugo static site deployed til GitHub Pages via `docs/`-mappen (ikke `public/`).

### Sektioner og navigation
Navigationen (`layouts/partials/header.html`) linker til fire sektioner:
- **Long Hall** — Hall of Fame for CyberSpace-personligheder
- **CyberSpace** — Blog/log
- **Longship** — (under udvikling)
- **Store House** — Data-samling med to indholdstyper: *Artifacts* og *Echoes*

### Layout-hierarki
- `layouts/index.html` — Forsiden er et **standalone full-page template** der ikke bruger `baseof.html`. Den har sin egen `<html>`-struktur og henter `header.html` via partial.
- `layouts/_default/baseof.html` — Bruges af alle andre sider. Inkluderer header og footer partials.
- `layouts/partials/taleboble.html` — Genbrugt komponent: GTV-maskot til venstre + taleboble til højre. Bruges i single-page templates for Artefakt/Ekko.
- `layouts/store-house/list.html` og `layouts/long-hall/list.html` — Sektion-listesider med JS-data-indlæsning fra Hugo-genererede `window.gtvArtifacts`/`window.gtvEchoes`.

### CSS-struktur
Alle CSS-filer ligger i `static/css/`:
- `gtv.css` — Global identitet og alle `fx-*` klasser (nav, hero, cards, footer). **Primær fil.**
- `store-house.css` — Layout for Store House (`sh-*` klasser)
- `data-coffer.css` — Layout for Artefakt/Ekko single-sider og `taleboble`-komponenten (`gtv-*` klasser)
- `list-page.css` — Farver og layout for generiske listetider (`_default/list.html`)
- `long-hall.css` — Long Hall-specifik styling

### Farvepalette (fra `gtv.css` CSS-variabler)
```css
--bg-primary: #4a1862   /* Lilla baggrund */
--accent-cyan: #00ffcc  /* Primær accent, links, glow */
--text-white: #ffffff
--font-main: 'Courier New', Courier, monospace
```

### Indholdstyper og front matter
Brug altid de eksisterende archetypes som skabelon:

**Artefakt** (`archetypes/artefakt.md`):
```yaml
---
title: "Titel Her"
type: "artefakt"
tags: []
date: YYYY-MM-DDTHH:MM:SS+00:00
author: "GTV"
draft: false
---
```

**Ekko** (`archetypes/ekko.md`):
```yaml
---
title: "Titel Her"
type: "ekko"
tags: []
date: YYYY-MM-DDTHH:MM:SS+00:00
author: "GTV"
draft: false
---
```

Indhold skrives altid i body (under den sidste `---`), aldrig i front matter.

### Tag-system
Brug tagget `[_:GTV:_]` i kode-kommentarer og dokumentation der tilhører GTV-projektet.

### Deployment
`docs/` er output-mappen (konfigureret for GitHub Pages). Kør `hugo` for at bygge, og commit derefter `docs/`-mappen.
