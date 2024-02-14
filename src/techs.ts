import IconAndroid from '@/assets/techs/android.svg'
import IconApple from '@/assets/techs/apple.svg'
import IconHTML from '@/assets/techs/html.svg'
import IconCSS from '@/assets/techs/css.svg'
import IconJavascript from '@/assets/techs/javascript.svg'
import IconTypescript from '@/assets/techs/typescript.svg'
import IconVue from '@/assets/techs/vue.svg'
import IconReact from '@/assets/techs/react.svg'
import IconAngular from '@/assets/techs/angular.svg'
import IconSvelte from '@/assets/techs/svelte.svg'
import IconEmber from '@/assets/techs/ember.svg'
import IconStylus from '@/assets/techs/stylus.svg'
import IconLess from '@/assets/techs/less.svg'
import IconSass from '@/assets/techs/sass.svg'
import IconWebpack from '@/assets/techs/webpack.svg'
import IconVite from '@/assets/techs/vite.svg'
import IconGulp from '@/assets/techs/gulp.svg'
import IconJest from '@/assets/techs/jest.svg'
import IconKarma from '@/assets/techs/karma.svg'
import IconVitest from '@/assets/techs/vitest.svg'
import IconCypress from '@/assets/techs/cypress.svg'
import IconGit from '@/assets/techs/git.svg'
import IconPython from '@/assets/techs/python.svg'
import IconLinux from '@/assets/techs/linux.svg'
import IconGithub from '@/assets/techs/github.svg'
import IconMozilla from '@/assets/techs/mozilla.svg'
import IconSafari from '@/assets/techs/safari.svg'
import IconChrome from '@/assets/techs/chrome.svg'
import IconXcode from '@/assets/techs/xcode.svg'
import IconWordpress from '@/assets/techs/wordpress.svg'
import IconWhatsapp from '@/assets/techs/whatsapp.svg'
import IconVisualCode from '@/assets/techs/visualcode.svg'
import IconTelegram from '@/assets/techs/telegram.svg'
import IconSwift from '@/assets/techs/swift.svg'
import IconRuby from '@/assets/techs/ruby.svg'
import IconNode from '@/assets/techs/node.svg'
import IconMicrosoft from '@/assets/techs/microsoft.svg'
import IconPlaystore from '@/assets/techs/playstore.svg'
import IconTumblr from '@/assets/techs/tumblr.svg'
import IconCodepen from '@/assets/techs/codepen.svg'
import IconYotube from '@/assets/techs/youtube.svg'
import IconJava from '@/assets/techs/java.svg'
import IconPwa from '@/assets/techs/pwa.svg'
import IconTailwind from '@/assets/techs/tailwind.svg'
import IconNpm from '@/assets/techs/npm.svg'
import IconEdge from '@/assets/techs/edge.svg'
import IconCpp from '@/assets/techs/cpp.svg'
import IconCsharp from '@/assets/techs/csharp.svg'
import IconFirebase from '@/assets/techs/firebase.svg'
import IconPhp from '@/assets/techs/php.svg'
import IconMysql from '@/assets/techs/mysql.svg'
import IconStackOverflow from '@/assets/techs/stackoverflow.svg'
import IconChatGPT from '@/assets/techs/chatgpt.svg'
import IconFacebook from '@/assets/techs/facebook.svg'
import IconX from '@/assets/techs/x.svg'
import IconGoogle from '@/assets/techs/google.svg'
import IconIBM from '@/assets/techs/ibm.svg'
import IconLinkedin from '@/assets/techs/linkedin.svg'
import IconCisco from '@/assets/techs/cisco.svg'
import IconTikTok from '@/assets/techs/tiktok.svg'
import IconRedHat from '@/assets/techs/redhat.svg'
import IconOpera from '@/assets/techs/opera.svg'
import IconHP from '@/assets/techs/hp.svg'
import IconGitlab from '@/assets/techs/gitlab.svg'
import IconEvernote from '@/assets/techs/evernote.svg'
import IconDuckDuckGo from '@/assets/techs/duckduckgo.svg'
import IconDrupal from '@/assets/techs/drupal.svg'
import IconDropbox from '@/assets/techs/dropbox.svg'
import IconBaidu from '@/assets/techs/baidu.svg'
import IconDribbble from '@/assets/techs/dribbble.svg'
import IconDocker from '@/assets/techs/docker.svg'
import IconDiscord from '@/assets/techs/discord.svg'
import IconDigitalOcean from '@/assets/techs/digitalocean.svg'

const techs = [
  { name: 'Android',        icon: IconAndroid,        url: 'https://www.android.com' },
  { name: 'Apple',          icon: IconApple,          url: 'https://www.apple.com' },
  { name: 'Linux',          icon: IconLinux,          url: 'https://ubuntu.com' },
  { name: 'Microsoft',      icon: IconMicrosoft,      url: 'https://www.microsoft.com' },
  { name: 'PlayStore',      icon: IconPlaystore,      url: 'https://play.google.com' },
  { name: 'PWA',            icon: IconPwa,            url: 'https://web.dev/progressive-web-apps' },
  { name: 'HTML',           icon: IconHTML,           url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS',            icon: IconCSS,            url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS' },
  { name: 'JavaScript',     icon: IconJavascript,     url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',     icon: IconTypescript,     url: 'https://www.typescriptlang.org/docs' },
  { name: 'Node',           icon: IconNode,           url: 'https://nodejs.org/en' },
  { name: 'Java',           icon: IconJava,           url: 'https://www.java.com' },
  { name: 'Ruby',           icon: IconRuby,           url: 'https://www.ruby-lang.org/en' },
  { name: 'Python',         icon: IconPython,         url: 'https://docs.python.org' },
  { name: 'Swift',          icon: IconSwift,          url: 'https://developer.apple.com/swift' },
  { name: 'PHP',            icon: IconPhp,            url: 'https://www.php.net' },
  { name: 'C#',             icon: IconCsharp,         url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'C++',            icon: IconCpp,            url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'VisualCode',     icon: IconVisualCode,     url: 'https://code.visualstudio.com' },
  { name: 'Github',         icon: IconGithub,         url: 'https://github.com/criar-art' },
  { name: 'NPM',            icon: IconNpm,            url: 'npmjs.com/package/vue-techs-logos' },
  { name: 'YouTube',        icon: IconYotube,         url: 'https://youtube.com' },
  { name: 'Wordpress',      icon: IconWordpress,      url: 'https://wordpress.com' },
  { name: 'Tumblr',         icon: IconTumblr,         url: 'https://www.tumblr.com' },
  { name: 'CodePen',        icon: IconCodepen,        url: 'https://codepen.io' },
  { name: 'Vue',            icon: IconVue,            url: 'https://vuejs.org' },
  { name: 'React',          icon: IconReact,          url: 'https://reactjs.org' },
  { name: 'Angular',        icon: IconAngular,        url: 'https://angular.io' },
  { name: 'Svelte',         icon: IconSvelte,         url: 'https://svelte.dev' },
  { name: 'Ember',          icon: IconEmber,          url: 'https://emberjs.com' },
  { name: 'Stylus',         icon: IconStylus,         url: 'https://stylus-lang.com' },
  { name: 'Tailwind',       icon: IconTailwind,       url: 'https://tailwindcss.com' },
  { name: 'Less',           icon: IconLess,           url: 'https://lesscss.org' },
  { name: 'Sass',           icon: IconSass,           url: 'https://sass-lang.com' },
  { name: 'Webpack',        icon: IconWebpack,        url: 'https://webpack.js.org' },
  { name: 'Vite',           icon: IconVite,           url: 'https://vitejs.dev' },
  { name: 'Gulp',           icon: IconGulp,           url: 'https://gulpjs.com' },
  { name: 'Jest',           icon: IconJest,           url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma',          icon: IconKarma,          url: 'https://karma-runner.github.io' },
  { name: 'Vitest',         icon: IconVitest,         url: 'https://vitest.dev' },
  { name: 'Xcode',          icon: IconXcode,          url: 'https://developer.apple.com/xcode' },
  { name: 'Whatsapp',       icon: IconWhatsapp,       url: 'https://web.whatsapp.com' },
  { name: 'Telegram',       icon: IconTelegram,       url: 'https://web.telegram.org' },
  { name: 'Cypress',        icon: IconCypress,        url: 'https://www.cypress.io' },
  { name: 'Mozilla',        icon: IconMozilla,        url: 'https://www.mozilla.org' },
  { name: 'Safari',         icon: IconSafari,         url: 'https://www.apple.com/br/safari' },
  { name: 'Edge',           icon: IconEdge,           url: 'https://www.microsoft.com/pt-br/edge' },
  { name: 'Chrome',         icon: IconChrome,         url: 'https://www.google.com/intl/pt-BR/chrome' },
  { name: 'MySQL',          icon: IconMysql,          url: 'https://www.mysql.com' },
  { name: 'Firebase',       icon: IconFirebase,       url: 'https://firebase.google.com' },
  { name: 'Git',            icon: IconGit,            url: 'https://git-scm.com' },
  { name: 'StackOverflow',  icon: IconStackOverflow,  url: 'https://stackoverflow.com' },
  { name: 'ChatGPT',        icon: IconChatGPT,        url: 'https://chat.openai.com' },
  { name: 'Facebook',       icon: IconFacebook,       url: 'https://facebook.com' },
  { name: 'X',              icon: IconX,              url: 'https://x.com' },
  { name: 'Google',         icon: IconGoogle,         url: 'https://google.com' },
  { name: 'IBM',            icon: IconIBM,            url: 'https://ibm.com' },
  { name: 'Linkedin',       icon: IconLinkedin,       url: 'https://linkedin.com' },
  { name: 'Cisco',          icon: IconCisco,          url: 'https://cisco.com' },
  { name: 'TikTok',         icon: IconTikTok,         url: 'https://tiktok.com' },
  { name: 'RedHat',         icon: IconRedHat,         url: 'https://redhat.com' },
  { name: 'Opera',          icon: IconOpera,          url: 'https://opera.com' },
  { name: 'HP',             icon: IconHP,             url: 'https://hp.com' },
  { name: 'Gitlab',         icon: IconGitlab,         url: 'https://gitlab.com' },
  { name: 'Evernote',       icon: IconEvernote,       url: 'https://evernote.com' },
  { name: 'DuckDuckGo',     icon: IconDuckDuckGo,     url: 'https://duckduckgo.com' },
  { name: 'Drupal',         icon: IconDrupal,         url: 'https://drupal.com' },
  { name: 'Dropbox',        icon: IconDropbox,        url: 'https://dropbox.com' },
  { name: 'Baidu',          icon: IconBaidu,          url: 'https://baidu.com' },
  { name: 'Dribbble',       icon: IconDribbble,       url: 'https://dribbble.com' },
  { name: 'Docker',         icon: IconDocker,         url: 'https://docker.com' },
  { name: 'Discord',        icon: IconDiscord,        url: 'https://discord.com' },
  { name: 'DigitalOcean',   icon: IconDigitalOcean,   url: 'https://digitalocean.com' }
];

export default techs
