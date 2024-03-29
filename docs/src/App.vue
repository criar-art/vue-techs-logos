<script setup lang="ts">
import pkg from '../../package.json';
import Title from './components/Title.vue'
import VueTechsLogos from 'vue-techs-logos'
import DarkModeVue from 'darkmode-vue'

const appVersion: string = pkg.version;
</script>

<template>
  <header>
    <DarkModeVue class="darkmode-button" :hiddenLabel="true"/>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <Title :title="`vue-techs-logos@${appVersion}`" />
      <div class="code-content">
        <div>
          <h1>Install</h1>
          <code class="code-wrapper">
            {{`npm run install vue-techs-logos`}}
          </code>
          <p>ou</p>
          <code class="code-wrapper">
            {{`yarn add vue-techs-logos`}}
          </code>
          <p>Before install, do you need import this component.</p>
          <code class="code-wrapper">
            {{`import VueTechsLogos from 'vue-techs-logos'`}}
          </code>
        </div>
        <div>
          <h1>Usage</h1>
          <h4>Use single component</h4>
          <code class="code-wrapper">
            {{`<VueTechsLogos name="vue" />`}}
          </code>
          <h4>Use list of components</h4>
          <code class="code-wrapper">
            {{`<VueTechsLogos />`}}
          </code>
        </div>
      </div>
    </div>
  </header>

  <main>
    <h2>Single tech</h2>
    <code class="code-wrapper">
{{`<VueTechsLogos name="vue" />
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
      {{`<VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />`}}
    </code>
    <VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />
    <h2>List of technologies full</h2>
    <code class="code-wrapper">
      {{`<VueTechsLogos />`}}
    </code>
    <VueTechsLogos/>
    <h2>List of technologies full with hiddenLogos</h2>
    <code class="code-wrapper">
      {{`<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />`}}
    </code>
    <VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />
    <h2>List of technologies full hidden labels</h2>
    <code class="code-wrapper">
      {{`<VueTechsLogos :hiddenLabel="true" />`}}
    </code>
    <VueTechsLogos :hiddenLabel="true" />
  </main>
</template>

<style>
body {
  --vtl-background: rgba(0,0,0, .05);
  --vtl-background-tooltip: #444;
  --vtl-shadow-tooltip: rgba(0,0,0,.2);
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

  --vtl-background: rgba(0,0,0, .5);
  --vtl-background-tooltip: #fff;
  --vtl-shadow-tooltip: rgba(0,0,0,.2);
  --vtl-text: #000;
  --vtl-background-svg: #fff;
}
.darkmode-button {
  position: absolute;
  top: 0;
  right: 0;
}
h2 {
  margin: 4rem 0 1rem;
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
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  white-space: pre;
  margin: 1rem 0;
  color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  overflow: auto;
  transition: .3s all;
  border-radius: 10px;
}

.code-wrapper:hover {
  background: #000;
}

header {
  line-height: 1.5;
  width: 100%;
  margin-bottom: 4rem;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.code-content {
  display: flex;
  gap: 20px;
}

@media (max-width: 1024px) {
  header .wrapper {
    text-align: center;
  }
  .code-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
