import { describe, it, expect } from 'vitest'
import i18n from '../../i18n.js'
import { mount } from '@vue/test-utils'
import Experience from '../Experience/ExperienceComponent.vue'

describe('Experience', () => {
  it('renders properly', () => {
    const wrapper = mount(Experience, {
      global: {
        plugins: [i18n], // Ajoute Vue I18n comme plugin global
      },
    })
    // Vérifie si le texte "web" apparaît dans le rendu
    expect(wrapper.text()).toContain('2024')
  })
})
