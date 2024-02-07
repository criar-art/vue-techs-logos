import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VueTechsLogos from '../VueTechsLogos.vue'
import { techs } from './mock'

describe('VueTechsLogos', () => {
  it('renders properly', () => {
    const wrapper = mount(VueTechsLogos, { props: { name: 'vue', label: 'Test Vue' } })
    expect(wrapper.text()).toContain('Vue')
    expect(wrapper.text()).toContain('Test Vue')
  })
  it('renders properly', () => {
    const wrapper = mount(VueTechsLogos)

    for(let item of techs) {
      expect(wrapper.text()).toContain(item.name)
    }
  })
})
