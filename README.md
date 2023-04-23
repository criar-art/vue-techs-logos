# vue-techs-logos

A list with logos company and techs

Install
```js
npm install vue-techs-logos
```

Usage basic
```vue
import VueTechsLogs from 'vue-techs-logos';

// single icon
<VueTechsLogos class="single-logo" name="javascript" />

// list limited logos
<VueTechsLogos class="limted-logos" :list="['vue','javascript', 'react', 'angular']" />

// list all logos
<VueTechsLogos class="full-logos" list="full" />

// Hidden label
<VueTechsLogos name="javascript" :hiddenLabel="true" />
<VueTechsLogos list="full" :hiddenLabel="true" />

// single change label name
<VueTechsLogos name="javascript" label="New JavaScript" />

// Modification of size component
<VueTechsLogos class="teste" name="javascript" size="220px" />
```