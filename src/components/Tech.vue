<script setup>
import IconAndroid from '@/assets/techs/android.svg?component'
import IconApple from '@/assets/techs/apple.svg?component'
import IconHTML from '@/assets/techs/html.svg?component'
import IconCSS from '@/assets/techs/css.svg?component'
import IconJavascript from '@/assets/techs/javascript.svg?component'
import IconTypescript from '@/assets/techs/typescript.svg?component'
import IconVue from '@/assets/techs/vue.svg?component'
import IconReact from '@/assets/techs/react.svg?component'
import IconAngular from '@/assets/techs/angular.svg?component'
import IconSvelte from '@/assets/techs/svelte.svg?component'
import IconEmber from '@/assets/techs/ember.svg?component'
import IconStylus from '@/assets/techs/stylus.svg?component'
import IconLess from '@/assets/techs/less.svg?component'
import IconSass from '@/assets/techs/sass.svg?component'
import IconWebpack from '@/assets/techs/webpack.svg?component'
import IconVite from '@/assets/techs/vite.svg?component'
import IconGulp from '@/assets/techs/gulp.svg?component'
import IconJest from '@/assets/techs/jest.svg?component'
import IconKarma from '@/assets/techs/karma.svg?component'
import IconVitest from '@/assets/techs/vitest.svg?component'
import IconCypress from '@/assets/techs/cypress.svg?component'
import IconGit from '@/assets/techs/git.svg?component'

const techs = [
  { name: 'Android',     icon: IconAndroid,    url: 'https://www.android.com' },
  { name: 'Apple',       icon: IconApple,      url: 'https://www.apple.com' },
  { name: 'HTML',        icon: IconHTML,       url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS',         icon: IconCSS,        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS' },
  { name: 'JavaScript',  icon: IconJavascript, url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',  icon: IconTypescript, url: 'https://www.typescriptlang.org/docs' },
  { name: 'Vue',         icon: IconVue,        url: 'https://vuejs.org' },
  { name: 'React',       icon: IconReact,      url: 'https://reactjs.org' },
  { name: 'Angular',     icon: IconAngular,    url: 'https://angular.io' },
  { name: 'Svelte',      icon: IconSvelte,     url: 'https://svelte.dev' },
  { name: 'Ember',       icon: IconEmber,      url: 'https://emberjs.com' },
  { name: 'Stylus',      icon: IconStylus,     url: 'https://stylus-lang.com' },
  { name: 'Less',        icon: IconLess,       url: 'https://lesscss.org' },
  { name: 'Sass',        icon: IconSass,       url: 'https://sass-lang.com' },
  { name: 'Webpack',     icon: IconWebpack,    url: 'https://webpack.js.org' },
  { name: 'Vite',        icon: IconVite,       url: 'https://vitejs.dev' },
  { name: 'Gulp',        icon: IconGulp,       url: 'https://gulpjs.com' },
  { name: 'Jest',        icon: IconJest,       url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma',       icon: IconKarma,      url: 'https://karma-runner.github.io' },
  { name: 'Vitest',      icon: IconVitest,     url: 'https://vitest.dev' },
  { name: 'Cypress',     icon: IconCypress,    url: 'https://www.cypress.io' },
  { name: 'Git',         icon: IconGit,        url: 'https://git-scm.com' }
];

const props = defineProps(['list', 'name', 'size', 'label', 'hiddenLabel', 'class'])

const getTech = (name) => {
  return techs.find(item =>item.name.toLowerCase() == name.toLowerCase())
}
</script>

<template>
  <template v-if="list == 'full'">
    <section class="techs" :class="[props.classm]">
      <figure
        class="tech-container"
        :class="[tech.name.toLocaleLowerCase()]"
        :style="{ width: props.size ? props.size : '100px' }"
        v-for="tech of techs" :key="tech.name"
      >
        <component :is="tech.icon" />
        <template v-if="!hiddenLabel">
          <figcaption>{{ tech.name }}</figcaption>
        </template>
     </figure>
   </section>
  </template>
  <template v-if="name && getTech(name)">
    <figure
      class="tech-container"
      :class="[props.class, getTech(name).name]"
      :style="{ width: props.size ? props.size : '100px' }"
    >
      <component :is="getTech(name).icon" />
      <template v-if="!hiddenLabel">
        <figcaption v-if="props.label">{{ props.label }}</figcaption>
        <figcaption v-else>{{ getTech(name).name }}</figcaption>
      </template>
    </figure>
  </template>
</template>

<style lang="scss" scoped>
.techs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .title {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
  figure, figure.tech-container {
    background: rgba(0,0,0, .05);
    border-radius: 100px;
    width: 120px !important;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:hover {
      transform: scale(1.1);
    }
    svg {
      height: 50px;
      margin-bottom: .2rem;
    }
  }
}
</style>