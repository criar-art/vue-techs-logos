<script setup>
import { computed } from 'vue';
import techs from '@/techs'

const props = defineProps(['list', 'name', 'size', 'label', 'hiddenLabel', 'class', 'hiddenLogos', 'raw'])

const getTech = (name) => {
  return techs.find(item => item.name.toLowerCase() == name.toLowerCase())
}

const getTechs = (items) => techs.filter((tech => items.find(item => {
  return tech.name.toLowerCase() == item.toLowerCase()
})))

const hiddenTechs = (items) => techs.filter(item => !items.includes(item.name.toLocaleLowerCase()))

const listTechs = computed(() => {
  return props.list ? getTechs(props.list) : props.hiddenLogos ? hiddenTechs(props.hiddenLogos) : techs;
});
</script>

<template>
  <template v-if="raw">
    <template v-if="name && getTech(name) && !list">
      <component :is="getTech(name).icon" />
    </template>
    <template v-else>
      <component v-for="tech of listTechs" :key="tech.name" :is="tech.icon" />
    </template>
  </template>
  <template v-else>
    <template v-if="name && getTech(name) && !list">
      <figure class="tech-container" :class="[props.class, getTech(name).name]"
        :style="{ width: props.size ? props.size : '100px' }">
        <component :is="getTech(name).icon" />
        <figcaption :class="{ tooltip: hiddenLabel }">
          {{ props.label ? props.label : getTech(name).name }}
        </figcaption>
      </figure>
    </template>
    <template v-else>
      <section class="techs" :class="[props.class]">
        <figure class="tech-container" :class="[tech.name.toLocaleLowerCase()]"
          :style="{ width: props.size ? props.size : '100px' }" v-for="tech of listTechs" :key="tech.name">
          <component :is="tech.icon" />
          <figcaption :class="{ tooltip: hiddenLabel }">{{ tech.name }}</figcaption>
        </figure>
      </section>
    </template>
  </template>
</template>

<style lang="scss">
.techs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
}

figure.tech-container {
  background: transparent;
  border: 1px solid var(--vtl-background);
  border-radius: 100px;
  width: 120px !important;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: .3s all;
  &:hover {
    background: var(--vtl-background);
    border-color: var(--vtl-background);
    transform: scale(1.1);
  }
  svg {
    height: 50px;
    margin-bottom: .2rem;
  }
}

.tech-icon {
  width: 50px;
  height: 50px;
}

figure {
  position: relative;
  text-align: center;
  margin: .2rem;
  figcaption {
    font-size: .7rem;
    &.tooltip {
      position: absolute;
      bottom: 2%;
      background: var(--vtl-background-tooltip);
      box-shadow: 0 4px 10px var(--vtl-shadow-tooltip);
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      pointer-events: none;
      opacity: 0;
      transition: .3s all;
      color: #fff;
    }
  }
  &:hover {
    figcaption.tooltip {
      opacity: 1;
      pointer-events: all;
    }
  }
}

body {
  --vtl-background: rgba(0,0,0, .05);
  --vtl-background-tooltip: #444;
  --vtl-shadow-tooltip: rgba(0,0,0,.2);
  --vtl-text: #000;
  --vtl-background-svg: #000;
  --vtl-background-svg-invert: #fff;
  --vtl-background-gradient: linear-gradient(228deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 60%);
}

body.darkmode {
  --vtl-background: rgba(0,0,0, .5);
  --vtl-background-tooltip: #444;
  --vtl-shadow-tooltip: rgba(0,0,0,.2);
  --vtl-text: #fff;
  --vtl-background-svg: #fff;
  --vtl-background-svg-invert: #000;
  --vtl-background-gradient: linear-gradient(228deg, rgb(24, 24, 24) 0%, rgb(38, 38, 38) 60%);
}

@media (prefers-color-scheme: light) {
  :root {
    --vtl-background: rgba(0,0,0, .05);
    --vtl-background-tooltip: #444;
    --vtl-shadow-tooltip: rgba(0,0,0,.2);
    --vtl-text: #000;
    --vtl-background-svg: #000;
    --vtl-background-svg-invert: #fff;
    --vtl-background-gradient: linear-gradient(228deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 60%);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --vtl-background: rgba(0,0,0, .5);
    --vtl-background-tooltip: #444;
    --vtl-shadow-tooltip: rgba(0,0,0,.2);
    --vtl-text: #fff;
    --vtl-background-svg: #fff;
    --vtl-background-svg-invert: #000;
    --vtl-background-gradient: linear-gradient(228deg, rgb(24, 24, 24) 0%, rgb(38, 38, 38) 60%);
  }
}
</style>
