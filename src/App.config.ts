import pkg from '../package.json';
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

export const configApp = {
  name: 'vue-techs-logos',
  npm: 'https://www.npmjs.com/package/vue-techs-logos',
  github: 'https://github.com/criar-art/vue-techs-logos',
  appVersion,
  vueVersion,
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install vue-techs-logos',
    },
    {
      name: 'Usage',
      language: 'tsx',
      content: `import VueTechsLogos from 'vue-techs-logos'

<VueTechsLogos name="vue" />`,
    },
    {
      name: 'hiddenLabel',
      language: 'tsx',
      content: '<VueTechsLogos name="vue" :hiddenLabel="true" />',
    },
    {
      name: 'list',
      language: 'tsx',
      content: `<VueTechsLogos :list="['vue','JavaScript', 'react', 'angular']" />`,
    },
    {
      name: 'hiddenLogos',
      language: 'tsx',
      content: `<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />`,
    },
    {
      name: 'raw',
      language: 'tsx',
      content: `<VueTechsLogos name="vue" :raw="true" />`,
    },
  ],
}
