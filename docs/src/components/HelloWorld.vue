<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully run this project
      <a href="https://github.com/criar-art/vue-techs-logos" target="_blank" rel="noopener">criart.art/vue-techs-logos</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1,
h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  h1 {
    font-weight: 500;
    font-size: 2.8rem;
  }

  h1,
  h3 {
    text-align: left;
  }
}
</style>
