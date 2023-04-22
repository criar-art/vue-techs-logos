<script setup lang="ts">
import pkg from '../../package.json';
import HelloWorld from './components/HelloWorld.vue'
import VueTechsLogos from 'vue-techs-logos'

const appVersion: string = pkg.version;
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld :msg="`vue-techs-logos@${appVersion}`" />
      <div class="code-content"> 
        <h1>Install</h1>
        <code class="code-wrapper">
          {{`npm run install vue-techs-logos`}}
          ou
          {{`yarn add vue-techs-logos`}}
        </code>
        <p>Before instaal, do you need import this component.</p>
        <code class="code-wrapper">
          {{`import VueTechsLogos from 'vue-techs-logos'`}}
        </code>
        <h1>Usage</h1>
        <h4>Use single component</h4>
        <code class="code-wrapper">
          {{`<VueTechsLogos name="vue" />`}}
        </code>
        <h4>Use list of components</h4>
        <code class="code-wrapper">
          {{`<VueTechsLogos list="full" />`}}
        </code>
      </div>
    </div>
  </header>

  <main>
    <h2>List of technologies</h2>
    <VueTechsLogos list="full" />
    <h2>Single tech</h2>
    <section class="single-section">
      <VueTechsLogos name="vue" />
      <VueTechsLogos name="react" />
      <VueTechsLogos name="angular" />
      <VueTechsLogos name="ember" />
      <VueTechsLogos name="svelte" />
    </section>
  </main>
</template>

<style>
.single-section {
  display: flex;
  gap: 20px;
  margin-top: 1rem;
}
.single-section figure {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  flex-direction: column;
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 1rem;
}
.code-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  white-space: pre;
  margin: 1rem 0;
  color: red;
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
