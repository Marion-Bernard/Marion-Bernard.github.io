import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    presentation: 'Presentation',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  fr: {
    presentation: 'Présentation',
    experience: 'Expérience',
    skills: 'Langages et outils',
    projects: 'Projets',
    contact: 'Contact',
  },
}

const i18n = createI18n({
  locale: 'fr', // langue par défaut
  messages,
})

export default i18n
