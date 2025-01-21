import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    presentation: 'About me',
    experience: 'Working experiences',
    formation: 'Formation',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    welcome: {
      title: 'From agricultural engineer to web developer',
      subtitle: 'Welcome to my portfolio',
    },
  },
  fr: {
    presentation: 'Présentation',
    experience: 'Expérience',
    formation: 'Formation',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    welcome: {
      title: "D'ingénieure agronome à développeuse web",
      subtitle: 'Bienvenue dans mon portefolio !',
    },
  },
}

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages,
})

export default i18n
