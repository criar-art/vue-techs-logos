<script setup lang="ts">
import pkg from '../package.json';
import HelloWorld from './components/HelloWorld.vue'
import Tech from './components/Tech.vue'

const appVersion: string = pkg.version;
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="`List ${appVersion}`" />
    </div>
  </header>

  <main>
    <h2>individual tech</h2>
    <Tech name="vue" />
    <Tech name="react" />
    <Tech name="angular" />
    <Tech name="ember" />
    <Tech name="svelte" />
    <h2>List of technologies</h2>
    <Tech list="full" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
  margin-bottom: 4rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
  }
}
</style>
