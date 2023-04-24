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
  font-size: ;
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
