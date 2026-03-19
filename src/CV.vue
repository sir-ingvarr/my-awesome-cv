<template>
  <div ref="root" class="cv-root" v-html="html"></div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import htmlContent from '!!raw-loader!../index.html';
// eslint-disable-next-line import/no-webpack-loader-syntax
import styleCSS from '!!raw-loader!../assets/style.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import fontawesomeCSS from '!!raw-loader!../assets/fontawesome.min.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import faSolidCSS from '!!raw-loader!../assets/fa-solid.min.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import faBrandsCSS from '!!raw-loader!../assets/fa-brands.min.css';

import photoUrl from '../assets/photo.jpg';

function scopeCSS(css) {
  // Replace html/body selectors with the component root class
  return css
    .replace(/(?:^|\}[\s]*)html\s*\{/g, function (m) { return m.replace('html', '.cv-root'); })
    .replace(/(?:^|\}[\s]*)body\s*\{/g, function (m) { return m.replace('body', '.cv-root'); });
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
    style.textContent = [fontawesomeCSS, faSolidCSS, faBrandsCSS, scopeCSS(styleCSS)].join('\n')
      + '\n.cv-root .underlay { background-color: transparent; }';
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
