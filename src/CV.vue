<template>
  <div ref="cv" v-html="html"></div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import htmlContent from '!!raw-loader!../index.html';

export default {
  name: 'CvPage',
  data() {
    return {
      html: '',
    };
  },
  created() {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    this.html = doc.body.innerHTML;
  },
};
</script>

<style>
@import '../assets/style.css';
</style>
