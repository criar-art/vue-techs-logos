<script setup>
const techs = [
  { name: 'Android',            url: 'https://www.android.com'                                      },
  { name: 'Apple',              url: 'https://www.apple.com'                                        },
  { name: 'HTML',               url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'      },
  { name: 'CSS',                url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS'        },
  { name: 'JavaScript',         url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',         url: 'https://www.typescriptlang.org/docs'                          },
  { name: 'Vue',                url: 'https://vuejs.org'                                            },
  { name: 'React',              url: 'https://reactjs.org'                                          },
  { name: 'Angular',            url: 'https://angular.io'                                           },
  { name: 'Svelte',             url: 'https://svelte.dev'                                           },
  { name: 'Ember',              url: 'https://emberjs.com'                                          },
  { name: 'Stylus',             url: 'https://stylus-lang.com'                                      },
  { name: 'Less',               url: 'https://lesscss.org'                                          },
  { name: 'Sass',               url: 'https://sass-lang.com'                                        },
  { name: 'Webpack',            url: 'https://webpack.js.org'                                       },
  { name: 'Vite',               url: 'https://vitejs.dev'                                           },
  { name: 'Gulp',               url: 'https://gulpjs.com'                                           },
  { name: 'Jest',               url: 'https://jestjs.io/pt-BR'                                      },
  { name: 'Karma',              url: 'https://karma-runner.github.io'                               },
  { name: 'Vitest',             url: 'https://vitest.dev'                                           },
  { name: 'Cypress',            url: 'https://www.cypress.io'                                       },
  { name: 'Git',                url: 'https://git-scm.com'                                          }
];

function toLowerCase (text) {
  return String(text).replaceAll(' ', '').toLowerCase();
}
</script>

<template>
   <section class="techs">
    <figure class="tech-container" v-for="tech of techs" :key="tech.name">
      <img
        v-bind="props"
        :alt="`${tech.name} logo`"
        class="logo"
        :src="`/techs/${toLowerCase(tech.name)}.svg`"
        width="125"
        height="125"
      />
      <figcaption>{{ tech.name }}</figcaption>
    </figure>
  </section>
</template>

<style lang="scss" scoped>
.techs {
  display: flex;
  flex-wrap: wrap;
  clear: both;
  margin-top: 4rem;
  align-items: center;
  justify-content: space-around;
}

.tech-container {
  background: rgba(250, 250, 250, .2);
  margin: .5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: .2s all;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
}
</style>