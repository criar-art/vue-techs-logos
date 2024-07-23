<script setup>
import hljs from 'highlight.js';
import 'highlight.js/scss/atom-one-light.scss';
import { onMounted, ref } from 'vue';

const props = defineProps(['language'])
const code = ref(null)

onMounted(() => {
  if (code.value) {
    hljs.highlightElement(code.value);
  }
})

</script>

<template>
  <code ref="code" :class="`code-wrapper language-${language}`">
    <slot></slot>
  </code>
</template>

<style lang="scss">
.code-wrapper {
  padding: 1rem !important;
  background-color: #fff !important;
  color: #000;
}

.darkmode {
  .code-wrapper {
    background-color: #000 !important;
    color: #fff;
  }
}
</style>
