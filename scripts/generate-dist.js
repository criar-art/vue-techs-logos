import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonminify from 'jsonminify';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the output directory path
const outputDir = path.resolve(__dirname, '../dist');

// Read the current package.json
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'));

// Modify the package.json for the dist folder
const distPackageJson = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  description: pkg.description,
  repository: pkg.repository,
  bugs: pkg.bugs,
  private: false,
  type: "module",
  keywords: pkg.keywords,
  peerDependencies: {
    vue: '^3.4.38',
  },
  files: [
    'vue-techs-logos.umd.cjs',
    'vue-techs-logos.js',
    'vue-techs-logos.d.ts'
  ],
  main: "./vue-techs-logos.umd.cjs",
  module: "./vue-techs-logos.js",
  types: './vue-techs-logos.d.ts',
  exports: {
    ".": {
      "import": "./vue-techs-logos.js",
      "require": "./vue-techs-logos.umd.js"
    }
  }
};

// Minify the modified package.json
const minifiedJson = jsonminify(JSON.stringify(distPackageJson, null, 2));

// Write the minified package.json to the dist folder
fs.writeFileSync(
  path.join(outputDir, 'package.json'),
  minifiedJson
);

console.log('Minified dist package.json generated successfully.');

// Optionally copy README
fs.copyFileSync(path.resolve(__dirname, '../README.md'), path.join(outputDir, 'README.md'));
console.log('README.md copied to dist.');

// Optionally copy declaration file
fs.copyFileSync(path.resolve(__dirname, '../vue-techs-logos.d.ts'), path.join(outputDir, 'vue-techs-logos.d.ts'));
console.log('vue-techs-logos.d.ts copied to dist.');

// Remove unnecessary files from dist
const filesToRemove = ['favicon.ico', 'screen-vue-techs-logos.png'];

filesToRemove.forEach(file => {
  const filePath = path.join(outputDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`${file} removed from dist.`);
  } else {
    console.warn(`${file} not found in dist, skipping removal.`);
  }
});
