<template>
  <div ref="root" class="cv-root" v-html="html"></div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import htmlContent from '!!raw-loader!../index.html';
// eslint-disable-next-line import/no-webpack-loader-syntax
import styleCSS from '!!raw-loader!../assets/style.css';

import photoUrl from '../assets/photo.jpg';
import translations from './translations';

function scopeCSS(css) {
  return css
    .replace(/(^|\})([\s]*)html\s*\{/g, '$1$2.cv-root {')
    .replace(/(^|\})([\s]*)body\s*\{/g, '$1$2.cv-root {')
    .replace(/background-color\s*:\s*var\(--bg-page\)\s*;?/g, '')
    .replace(/background-color\s*:\s*var\(--bg-card\)\s*;?/g, '');
}

function translateHTML(html, lang) {
  var map = translations[lang];
  if (!map) return html;
  return html.replace(/\{\{\s*([\w]+)\s*\}\}/g, function (match, key) {
    return map[key] !== undefined ? map[key] : match;
  });
}

function parseBody(rawHtml, lang) {
  var translated = translateHTML(rawHtml, lang);
  var doc = new DOMParser().parseFromString(translated, 'text/html');

  var imgs = doc.querySelectorAll('img[src*="photo"]');
  imgs.forEach(function (img) {
    img.setAttribute('src', photoUrl);
  });

  return doc.body.innerHTML;
}

export default {
  name: 'CvPage',
  props: {
    lang: {
      type: String,
      default: 'en',
      validator: function (v) {
        return ['en', 'ua'].indexOf(v) !== -1;
      },
    },
  },
  computed: {
    html: function () {
      return parseBody(htmlContent, this.lang);
    },
  },
  watch: {
    html: function () {
      var self = this;
      this.$nextTick(function () {
        self._injectStyle();
      });
    },
  },
  mounted() {
    this._injectStyle();
  },
  beforeDestroy() {
    this._removeStyle();
  },
  methods: {
    _injectStyle: function () {
      var style = document.createElement('style');
      style.setAttribute('data-cv-scoped', '');
      style.textContent = scopeCSS(styleCSS);
      this.$refs.root.appendChild(style);
      this._cvStyle = style;
    },
    _removeStyle: function () {
      if (this._cvStyle && this._cvStyle.parentNode) {
        this._cvStyle.parentNode.removeChild(this._cvStyle);
      }
    },
  },
};
</script>

<style>
@import '../assets/fontawesome.min.css';
@import '../assets/fa-solid.min.css';
@import '../assets/fa-brands.min.css';
</style>
