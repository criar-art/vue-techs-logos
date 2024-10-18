<script setup>
import Code from './Code.vue'
const props = defineProps(['active', 'closeModal'])
</script>

<template>
  <div class="modal" :class="{ active: active }">
    <button className="modal-button" @click="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="#f00"
          d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z" />
      </svg>
    </button>
    <div class="modal-content">
      <h2>Install</h2>
      <Code language="shell">npm install vue-techs-logos</Code>
      <h2>Usage</h2>
      <Code language="jsx">
        {{ `import VueTechsLogos from 'vue-techs-logos'

<VueTechsLogos name="vue" />` }}
      </Code>
      <h2>hiddenLabel</h2>
      <Code language="jsx">
        {{ `<VueTechsLogos name="vue" :hiddenLabel="true" />` }}
      </Code>
      <h2>List</h2>
      <Code language="jsx">
        {{ `<VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />` }}
      </Code>
      <h2>hiddenLogos</h2>
      <Code language="jsx">
        {{ `<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />` }}
      </Code>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  background: var(--vtl-background);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  backdrop-filter: blur(20px);
  opacity: 0;
  pointer-events: none;
  transition: .5s all;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
}

.modal-content {
  background: var(--vtl-background);
  overflow: auto;
  border-radius: 20px;
  margin: 3rem;
  padding: 2rem;
  height: calc(100% - 5rem);

  h2:first-of-type {
    margin-top: 0;
  }

  code:last-of-type {
    margin-bottom: 0;
  }
}

.modal-button {
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 11;
  cursor: pointer;
  background-color: #fff;
  border: 0;
  border-radius: 100px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(2);
}
</style>
