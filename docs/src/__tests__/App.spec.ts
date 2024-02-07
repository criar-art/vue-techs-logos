import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { techs } from '../../../src/components/__tests__/mock'

describe('App', () => {
  it('renders basic app exists', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders components with loop and check name', () => {
    const wrapper = mount(App)

    for(let item of techs) {
      expect(wrapper.text()).toContain(item.name)
    }
  })
})
