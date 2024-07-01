<script setup>
import pkg from '../../package.json';
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');
</script>

<template>
  <p class="vue-version">Vue <b>{{ vueVersion }}</b></p>
  <p class="app-version">vue-techs-logos <b>{{ appVersion }}</b></p>
</template>

<style lang='scss'>
.app-version,
.vue-version {
  font-size: 1.2rem;
  margin: 0;
  line-height: 2rem;
  @media (max-width: 640px) {
    font-size: 1em;
  }
  b {
    font-weight: bold;
  }
}
</style>
