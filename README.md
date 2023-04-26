# vue-techs-logos

A list with logos company and techs


<img alt="A list with logos company and techs screenshot" width="100%" src="https://raw.githubusercontent.com/criar-art/vue-techs-logos/main/public/screen-vue-techs-logos.png" />

Install
```js
npm install vue-techs-logos
```

Usage basic
```vue
import VueTechsLogs from 'vue-techs-logos';

// list all logos
<VueTechsLogos />

// single icon
<VueTechsLogos name="javascript" />

// list limited logos
<VueTechsLogos :list="['vue','javascript', 'react', 'angular']" />

// list all logos with hiddenLogos
<VueTechsLogos :hiddenLogos="['vue','javascript', 'react', 'angular', 'android']" />

// Hidden label
<VueTechsLogos name="javascript" :hiddenLabel="true" />
<VueTechsLogos :hiddenLabel="true" />

// single change label name
<VueTechsLogos name="javascript" label="New JavaScript" />

// Modification of size component
<VueTechsLogos name="javascript" size="220px" />
```
