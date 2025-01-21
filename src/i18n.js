import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    experience: 'Working experiences',
    formation: 'Formation',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    presentation: {
      label: 'ABout me',
      title: 'From agricultural engineer to web developer',
    },
  },
  fr: {
    experience: 'Expérience',
    formation: 'Formation',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    presentation: {
      label: 'A propos de moi',
      title: "D'ingénieure agronome à développeuse web",
    },
  },
}

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages,
})

export default i18n
