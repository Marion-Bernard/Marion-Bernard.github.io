import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../components/PresentationComponent.vue'
import Experience from '../components/Experience/ExperienceComponent.vue'
import Skills from '../components/SkillsComponent.vue'
import Projects from '../components/ProjectsComponent.vue'
import Contact from '../components/ContactComponent.vue'

const routes = [
  { path: '/', component: Presentation },
  { path: '/experience', component: Experience },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
