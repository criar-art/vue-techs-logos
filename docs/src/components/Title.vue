<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="title">
    <h1 class="green">{{ title }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  top: -10px;
  text-align: center;
}

@media (min-width: 1024px) {
  h1 {
    font-weight: 500;
    font-size: 2.8rem;
    text-align: left;
  }
}
</style>
