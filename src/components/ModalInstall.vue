<script setup>
// import { computed } from 'vue';
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

  .code-wrapper {
    background-color: #fff;
    color: #000;
  }
}

.darkmode {
  .modal-content .code-wrapper {
    background-color: #000;
    color: #fff;
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
