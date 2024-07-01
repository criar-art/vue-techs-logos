import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppFooter from '../Footer.vue'

import pkg from '../../../package.json';

const wrapper: any = mount(AppFooter)
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

describe('AppFooter', () => {
  it('is AppFooter a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is AppFooter contains div footer', () => {
    expect(wrapper.find('.app-footer').exists()).toBeTruthy()
  })

  it('is AppFooter contains credits', () => {
    expect(wrapper.find('.app-footer a').element.href).toBe('https://github.com/criar-art/vue-techs-logos')
    expect(wrapper.find('.app-footer a').text()).toBe(`Vue ${vueVersion}vue-techs-logos ${appVersion} @lucasferreiralimax`)
  })

  it('is AppFooter contains svg logo Github', () => {
    expect(wrapper.find('.app-footer a > svg').exists()).toBeTruthy()
  })
})
