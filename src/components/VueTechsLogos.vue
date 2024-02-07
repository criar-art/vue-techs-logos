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
import IconPython from '@/assets/techs/python.svg?component'
import IconLinux from '@/assets/techs/linux.svg?component'
import IconGithub from '@/assets/techs/github.svg?component'
import IconMozilla from '@/assets/techs/mozilla.svg?component'
import IconSafari from '@/assets/techs/safari.svg?component'
import IconChrome from '@/assets/techs/chrome.svg?component'
import IconXcode from '@/assets/techs/xcode.svg?component'
import IconWordpress from '@/assets/techs/wordpress.svg?component'
import IconWhatsapp from '@/assets/techs/whatsapp.svg?component'
import IconVisualCode from '@/assets/techs/visualcode.svg?component'
import IconTelegram from '@/assets/techs/telegram.svg?component'
import IconSwift from '@/assets/techs/swift.svg?component'
import IconRuby from '@/assets/techs/ruby.svg?component'
import IconNode from '@/assets/techs/node.svg?component'
import IconMicrosoft from '@/assets/techs/microsoft.svg?component'
import IconPlaystore from '@/assets/techs/playstore.svg?component'
import IconTumblr from '@/assets/techs/tumblr.svg?component'
import IconCodepen from '@/assets/techs/codepen.svg?component'
import IconYotube from '@/assets/techs/youtube.svg?component'
import IconJava from '@/assets/techs/java.svg?component'
import IconPwa from '@/assets/techs/pwa.svg?component'
import IconTailwind from '@/assets/techs/tailwind.svg?component'
import IconNpm from '@/assets/techs/npm.svg?component'
import IconEdge from '@/assets/techs/edge.svg?component'
import IconCpp from '@/assets/techs/cpp.svg?component'
import IconCsharp from '@/assets/techs/csharp.svg?component'
import IconFirebase from '@/assets/techs/firebase.svg?component'
import IconPhp from '@/assets/techs/php.svg?component'
import IconMysql from '@/assets/techs/mysql.svg?component'

const techs = [
  { name: 'Android',     icon: IconAndroid,    url: 'https://www.android.com' },
  { name: 'Apple',       icon: IconApple,      url: 'https://www.apple.com' },
  { name: 'Linux',       icon: IconLinux,      url: 'https://ubuntu.com' },
  { name: 'Microsoft',   icon: IconMicrosoft,  url: 'https://www.microsoft.com' },
  { name: 'PlayStore',   icon: IconPlaystore,  url: 'https://play.google.com' },
  { name: 'PWA',         icon: IconPwa,        url: 'https://web.dev/progressive-web-apps' },
  { name: 'HTML',        icon: IconHTML,       url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS',         icon: IconCSS,        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS' },
  { name: 'JavaScript',  icon: IconJavascript, url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',  icon: IconTypescript, url: 'https://www.typescriptlang.org/docs' },
  { name: 'Node',        icon: IconNode,       url: 'https://nodejs.org/en' },
  { name: 'Java',        icon: IconJava,       url: 'https://www.java.com' },
  { name: 'Ruby',        icon: IconRuby,       url: 'https://www.ruby-lang.org/en' },
  { name: 'Python',      icon: IconPython,     url: 'https://docs.python.org' },
  { name: 'Swift',       icon: IconSwift,      url: 'https://developer.apple.com/swift' },
  { name: 'PHP',         icon: IconPhp,        url: 'https://www.php.net' },
  { name: 'C#',          icon: IconCsharp,     url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'C++',         icon: IconCpp,        url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'VisualCode',  icon: IconVisualCode, url: 'https://code.visualstudio.com' },
  { name: 'Github',      icon: IconGithub,     url: 'https://github.com/criar-art' },
  { name: 'NPM',         icon: IconNpm,        url: 'npmjs.com/package/vue-techs-logos' },
  { name: 'YouTube',     icon: IconYotube,     url: 'https://youtube.com' },
  { name: 'Wordpress',   icon: IconWordpress,  url: 'https://wordpress.com' },
  { name: 'Tumblr',      icon: IconTumblr,     url: 'https://www.tumblr.com' },
  { name: 'CodePen',     icon: IconCodepen,    url: 'https://codepen.io' },
  { name: 'Vue',         icon: IconVue,        url: 'https://vuejs.org' },
  { name: 'React',       icon: IconReact,      url: 'https://reactjs.org' },
  { name: 'Angular',     icon: IconAngular,    url: 'https://angular.io' },
  { name: 'Svelte',      icon: IconSvelte,     url: 'https://svelte.dev' },
  { name: 'Ember',       icon: IconEmber,      url: 'https://emberjs.com' },
  { name: 'Stylus',      icon: IconStylus,     url: 'https://stylus-lang.com' },
  { name: 'Tailwind',    icon: IconTailwind,   url: 'https://tailwindcss.com' },
  { name: 'Less',        icon: IconLess,       url: 'https://lesscss.org' },
  { name: 'Sass',        icon: IconSass,       url: 'https://sass-lang.com' },
  { name: 'Webpack',     icon: IconWebpack,    url: 'https://webpack.js.org' },
  { name: 'Vite',        icon: IconVite,       url: 'https://vitejs.dev' },
  { name: 'Gulp',        icon: IconGulp,       url: 'https://gulpjs.com' },
  { name: 'Jest',        icon: IconJest,       url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma',       icon: IconKarma,      url: 'https://karma-runner.github.io' },
  { name: 'Vitest',      icon: IconVitest,     url: 'https://vitest.dev' },
  { name: 'Xcode',       icon: IconXcode,      url: 'https://developer.apple.com/xcode' },
  { name: 'Whatsapp',    icon: IconWhatsapp,   url: 'https://web.whatsapp.com' },
  { name: 'Telegram',    icon: IconTelegram,   url: 'https://web.telegram.org' },
  { name: 'Cypress',     icon: IconCypress,    url: 'https://www.cypress.io' },
  { name: 'Mozilla',     icon: IconMozilla,    url: 'https://www.mozilla.org' },
  { name: 'Safari',      icon: IconSafari,     url: 'https://www.apple.com/br/safari' },
  { name: 'Edge',        icon: IconEdge,       url: 'https://www.microsoft.com/pt-br/edge' },
  { name: 'Chrome',      icon: IconChrome,     url: 'https://www.google.com/intl/pt-BR/chrome' },
  { name: 'MySQL',       icon: IconMysql,      url: 'https://www.mysql.com' },
  { name: 'Firebase',    icon: IconFirebase,   url: 'https://firebase.google.com' },
  { name: 'Git',         icon: IconGit,        url: 'https://git-scm.com' }
];

const props = defineProps(['list', 'name', 'size', 'label', 'hiddenLabel', 'class', 'hiddenLogos'])

const getTech = (name) => {
  return techs.find(item => item.name.toLowerCase() == name.toLowerCase())
}

const getTechs = (items) => techs.filter((tech => items.find(item => {
  return tech.name.toLowerCase() == item.toLowerCase()
})))

const hiddenTechs = (items) => techs.filter(item => !items.includes(item.name.toLocaleLowerCase()))
</script>

<template>
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
    <template v-if="list">
      <section class="techs" :class="[props.class]">
        <figure class="tech-container" :class="[tech.name.toLocaleLowerCase()]"
          :style="{ width: props.size ? props.size : '100px' }" v-for="tech of getTechs(list)" :key="tech.name">
          <component :is="tech.icon" />
          <figcaption :class="{ tooltip: hiddenLabel }">{{ tech.name }}</figcaption>
        </figure>
      </section>
    </template>
    <template v-else>
      <section class="techs" :class="[props.class]">
        <template v-if="hiddenLogos">
          <figure class="tech-container" :class="[tech.name.toLocaleLowerCase()]"
            :style="{ width: props.size ? props.size : '100px' }" v-for="tech of hiddenTechs(hiddenLogos)"
            :key="tech.name">
            <component :is="tech.icon" />
            <figcaption :class="{ tooltip: hiddenLabel }">{{ tech.name }}</figcaption>
          </figure>
        </template>
        <template v-else>
          <figure class="tech-container" :class="[tech.name.toLocaleLowerCase()]"
            :style="{ width: props.size ? props.size : '100px' }" v-for="tech of techs" :key="tech.name">
            <component :is="tech.icon" />
            <figcaption :class="{ tooltip: hiddenLabel }">{{ tech.name }}</figcaption>
          </figure>
        </template>
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
  gap: 20px;

  .title {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }

  figure,
  figure.tech-container {
    background: var(--vtl-background);
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

      figcaption.tooltip {
        opacity: 1;
        pointer-events: all;
      }
    }

    svg {
      height: 50px;
      margin-bottom: .2rem;
    }

    figcaption.tooltip {
      position: absolute;
      bottom: 2%;
      background: var(--vtl-background-tooltip);
      box-shadow: 0 4px 10px var(--vtl-shadow-tooltip);
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      pointer-events: none;
      opacity: 0;
      transition: .3s all;
      color: var(--vtl-text);
    }
  }
}

body {
  --vtl-background: rgba(0, 0, 0, .05);
  --vtl-background-tooltip: #444;
  --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
  --vtl-text: #fff;
  --vtl-background-svg: #000;
}

body.darkmode {
  --vtl-background: rgba(0, 0, 0, .5);
  --vtl-background-tooltip: #fff;
  --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
  --vtl-text: #000;
  --vtl-background-svg: #fff;
}

@media (prefers-color-scheme: light) {
  :root {
    --vtl-background: rgba(0, 0, 0, .05);
    --vtl-background-tooltip: #444;
    --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
    --vtl-text: #fff;
    --vtl-background-svg: #000;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --vtl-background: rgba(0, 0, 0, .5);
    --vtl-background-tooltip: #fff;
    --vtl-shadow-tooltip: rgba(0, 0, 0, .2);
    --vtl-text: #000;
    --vtl-background-svg: #fff;
  }
}
</style>