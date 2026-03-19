<template>
  <div ref="root" class="cv-root" v-html="html"></div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import htmlContent from '!!raw-loader!../index.html';
// eslint-disable-next-line import/no-webpack-loader-syntax
import styleCSS from '!!raw-loader!../assets/style.css';

import photoUrl from '../assets/photo.jpg';

function scopeCSS(css) {
  return css
    // Rewrite html/body selectors to .cv-root
    .replace(/(^|\})([\s]*)html\s*\{/g, '$1$2.cv-root {')
    .replace(/(^|\})([\s]*)body\s*\{/g, '$1$2.cv-root {')
    // Strip background-color declarations so host app background shows through
    .replace(/background-color\s*:\s*var\(--bg-page\)\s*;?/g, '')
    .replace(/background-color\s*:\s*var\(--bg-card\)\s*;?/g, '');
}

export default {
  name: 'CvPage',
  data() {
    return {
      html: '',
    };
  },
  created() {
    var doc = new DOMParser().parseFromString(htmlContent, 'text/html');

    var imgs = doc.querySelectorAll('img[src*="photo"]');
    imgs.forEach(function (img) {
      img.setAttribute('src', photoUrl);
    });

    this.html = doc.body.innerHTML;
  },
  mounted() {
    var style = document.createElement('style');
    style.setAttribute('data-cv-scoped', '');
    style.textContent = scopeCSS(styleCSS);
    this.$refs.root.appendChild(style);
    this._cvStyle = style;
  },
  beforeDestroy() {
    if (this._cvStyle && this._cvStyle.parentNode) {
      this._cvStyle.parentNode.removeChild(this._cvStyle);
    }
  },
};
</script>

<style>
@import '../assets/fontawesome.min.css';
@import '../assets/fa-solid.min.css';
@import '../assets/fa-brands.min.css';
</style>
