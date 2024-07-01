<script setup lang="ts">
import { ref, computed } from 'vue';
import pkg from '../package.json';
// import VueTechsLogos from 'vue-techs-logos'
import VueTechsLogos from './components/VueTechsLogos.vue'
import DarkModeVue from 'darkmode-vue'
import techs from './techs'

const appVersion: string = pkg.version;
const search = ref('');
const filteredArray = computed(() =>
  techs
    .filter((item) => item.name.toLowerCase().includes(search.value.trim().toLowerCase()))
    .map((item) => item.name)
);
</script>

<template>
  <header>
    <DarkModeVue class="darkmode-button" :hiddenLabel="true" />
    <a class="logo" href="https://github.com/criar-art/vue-techs-logos" target="_blank">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg?url" width="80" height="80" />
      <h1>{{ `vue-techs-logos@${appVersion}` }}</h1>
    </a href="">
  </header>

  <main>
    <div>
      <h1>Install</h1>
      <code class="code-wrapper">
        {{ `npm run install vue-techs-logos` }}
      </code>
      <h2>Usage</h2>
      <code class="code-wrapper">
        {{ `import VueTechsLogos from 'vue-techs-logos'

<VueTechsLogos name="vue" />` }}
      </code>
      <h2>Hidden label</h2>
      <code class="code-wrapper">
        {{ `<VueTechsLogos name="vue" :hiddenLabel="true" />` }}
      </code>
      <h2>List of technologies limited</h2>
      <code class="code-wrapper">
        {{ `<VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />` }}
      </code>
      <h2>List of technologies full with hiddenLogos</h2>
      <code class="code-wrapper">
        {{ `<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />` }}
      </code>
    </div>
    <h2>Full list of techs</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos />` }}
    </code>
    <input type="text" class="input-search" v-model="search" placeholder="Search logos..." />
    <VueTechsLogos :list="filteredArray" />
  </main>
</template>

<style>
body {
  --vtl-background: rgba(0, 0, 0, .05);
  --vtl-background-tooltip: #444;
  --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
  --vtl-text: #fff;
  --vtl-background-svg: #000;
}

body.darkmode {
  --color-background: var(--vt-c-black);
  --color-background-soft: var(--vt-c-black-soft);
  --color-background-mute: var(--vt-c-black-mute);

  --color-border: var(--vt-c-divider-dark-2);
  --color-border-hover: var(--vt-c-divider-dark-1);

  --color-heading: var(--vt-c-text-dark-1);
  --color-text: var(--vt-c-text-dark-2);

  --vtl-background: rgba(0, 0, 0, .5);
  --vtl-background-tooltip: #fff;
  --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
  --vtl-text: #000;
  --vtl-background-svg: #fff;
}

.darkmode-button {
  position: absolute;
  top: 0;
  right: 0;
}

h2 {
  margin: 1rem 0 1rem;
}

.code-wrapper {
  color: var(--color-text);
  background: var(--vtl-background);
  padding: 1rem;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, .2);
}

header {
  width: 100%;
}

.logo {
  display: inline-flex;
  align-items: center;
}

.logo:hover {
  background: transparent;
}

.input-search {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  background: var(--vtl-background);
  border: 2px solid var(--vtl-background);
  color: var(--color-text);
  width: calc(100% - 2rem);
}
</style>
