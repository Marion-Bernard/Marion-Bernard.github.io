import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    main: {
      work: 'Work',
      voluntering: 'Voluntering',
      internship: 'Internship',
      all: 'Show all',
    },
    experience: {
      label: 'Working experiences',
      today: 'Today',
    },
    study: {
      label: 'Studies',
    },
    skill: {
      label: 'Skills',
    },
    projects: 'Projects',
    contact: 'Contact',
    presentation: {
      label: 'About me',
      title: 'From agricultural engineer to web developer',
    },
  },
  fr: {
    main: {
      work: 'Travail',
      voluntering: 'Bénévolat',
      internship: 'Alternance / Stage',
      all: 'Tout afficher',
    },
    experience: {
      label: 'Expériences',
      today: "Aujourd'hui",
    },
    study: {
      label: 'Formations',
    },
    skill: {
      label: 'Compétences',
    },
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
