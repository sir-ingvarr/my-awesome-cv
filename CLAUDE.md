# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal CV/resume for Igor Berezin, built as a single-page HTML document (`index.html`) styled with CSS and convertible to PDF via a Node.js build script.

## Commands

- **Generate PDF**: `npm run build` — runs `src/build.js` to convert `index.html` into `Igor_Berezin_CV.pdf` (A3 portrait format) using the `html-pdf` library.
- **Install dependencies**: `npm install`
- No tests, linting, or dev server configured.

## Architecture

- `index.html` — the CV content and structure. References stylesheets and assets from `assets/`.
- `assets/style.css` — screen styles. `assets/print.css` — print-specific overrides (loaded via `media="print"`).
- `assets/` — also contains FontAwesome CSS/fonts, Roboto Mono fonts, and a photo.
- `src/build.js` — Node script that reads `index.html` and generates a PDF. Uses `file:///` base path pointing to `assets/` for resource resolution.

## Key Details

- PDF generation uses `html-pdf` (PhantomJS-based). The `renderDelay: 1500` gives fonts/images time to load.
- The print stylesheet (`print.css`) controls how the CV looks when printed or exported to PDF — changes to PDF appearance should go there.
- Fonts are self-hosted (Roboto Mono, FontAwesome) — no external CDN dependencies.
