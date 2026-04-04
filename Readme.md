# My Awesome CV

A developer-themed personal CV built as a single-page HTML document, styled to look like a code editor. The CV renders professional experience, skills, and education using syntax-highlighted code notation (`const`, template literals, object literals), giving it a distinctive look tailored for software engineering roles.

## Features

- **Code-editor aesthetic** — experience, skills, and education are presented as JavaScript-style variable declarations and object literals with syntax highlighting
- **Bilingual support** — English and Ukrainian, switchable via the `?lang=ua` query parameter
- **PDF export** — automated generation of print-ready A3 PDFs using Playwright
- **Vue component wrapper** (`src/CV.vue`) — allows embedding the CV as a self-contained Vue 3 component in other applications, with scoped styles and language prop
- **Self-hosted fonts** — Roboto Mono and FontAwesome, no external CDN dependencies
- **Responsive layout** — mobile-friendly with print-specific overrides

## Project Structure

```
index.html              Main CV document
assets/
  style.css             Screen styles
  print.css             Print / PDF overrides
  *.ttf                 Self-hosted fonts (Roboto Mono, FontAwesome)
  photo.jpg             Profile photo
src/
  build.js              PDF generation script (Playwright)
  CV.vue                Vue 3 component wrapper
  translations.js       EN/UA translation strings
  i18n.js               Vanilla JS i18n for standalone HTML usage
```

## Usage

### View in browser

Open `index.html` directly. Append `?lang=ua` for the Ukrainian version.

### Generate PDFs

```bash
npm install
npm run build
```

This produces `Igor_Berezin_CV.pdf` (English) and `Igor_Berezin_CV_UA.pdf` (Ukrainian) in A3 portrait format.

### Use as a Vue component

```js
import CvPage from './src/CV.vue';

// In your Vue 3 app
<CvPage lang="en" />
<CvPage lang="ua" />
```

The component uses `raw-loader` to inline the HTML and CSS, so a webpack (or compatible) build setup is required.

## License

[MIT](LICENSE)
