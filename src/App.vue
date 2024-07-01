<script setup lang="ts">
import pkg from '../package.json';
// import Title from './components/Title.vue'
// import VueTechsLogos from 'vue-techs-logos'
import VueTechsLogos from './components/VueTechsLogos.vue'
import DarkModeVue from 'darkmode-vue'

const appVersion: string = pkg.version;
</script>

<template>
  <header>
    <DarkModeVue class="darkmode-button" :hiddenLabel="true" />
    <a class="logo" href="https://github.com/criar-art/vue-techs-logos" target="_blank">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="80" height="80" />
      <h1>{{ `vue-techs-logos@${appVersion}` }}</h1>
    </a href="">
  </header>

  <main>
    <h1>Install</h1>
    <code class="code-wrapper">
      {{ `npm run install vue-techs-logos` }}
    </code>
    <h2>Usage</h2>
    <code class="code-wrapper">
      {{ `import VueTechsLogos from 'vue-techs-logos'

<VueTechsLogos name="vue" />` }}
    </code>
    <h2>Use list of components</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos />` }}
    </code>
    <h2>Single tech</h2>
    <code class="code-wrapper">
{{ `<VueTechsLogos name="vue" />
<VueTechsLogos name="react" />
<VueTechsLogos name="angular" />
<VueTechsLogos name="ember" />
<VueTechsLogos name="svelte" />`}}
    </code>
    <section class="single-section">
      <VueTechsLogos name="vue" />
      <VueTechsLogos name="react" />
      <VueTechsLogos name="angular" />
      <VueTechsLogos name="ember" />
      <VueTechsLogos name="svelte" />
    </section>
    <h2>List of technologies limited</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />` }}
    </code>
    <VueTechsLogos :list="['vue', 'JavaScript', 'react', 'angular']" />
    <h2>List of technologies full</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos />` }}
    </code>
    <VueTechsLogos />
    <h2>List of technologies full with hiddenLogos</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />` }}
    </code>
    <VueTechsLogos :hiddenLogos="['vue', 'javascript', 'react', 'angular', 'android']" />
    <h2>List of technologies full hidden labels</h2>
    <code class="code-wrapper">
      {{ `<VueTechsLogos :hiddenLabel="true" />` }}
    </code>
    <VueTechsLogos :hiddenLabel="true" />
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

.single-section {
  display: flex;
  gap: 20px;
}

.single-section figure {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem;
}

.code-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
  flex: 1;
  white-space: pre;
  margin: .5rem 0;
  color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  overflow: auto;
  transition: .3s all;
  border-radius: 10px;
  background: var(--vtl-background);
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

.code-content {
  display: flex;
  gap: 20px;
}
</style>
