<template>
  <div ref="cv" v-html="html"></div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import htmlContent from '!!raw-loader!../index.html';
import photoUrl from '../assets/photo.jpg';

export default {
  name: 'CvPage',
  data() {
    return {
      html: '',
    };
  },
  created() {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');

    // Replace photo src with webpack-resolved URL
    const imgs = doc.querySelectorAll('img[src*="photo"]');
    imgs.forEach(function (img) {
      img.setAttribute('src', photoUrl);
    });

    this.html = doc.body.innerHTML;
  },
};
</script>

<style>
@import '../assets/fontawesome.min.css';
@import '../assets/fa-solid.min.css';
@import '../assets/fa-brands.min.css';
@import '../assets/style.css';

.underlay {
  background-color: transparent;
}
</style>
