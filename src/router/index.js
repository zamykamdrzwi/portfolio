import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'skills',
      component: HomeView
    },
    {
      path: '/moje-umiejetnosci',
      name: 'moje-umiejetnosci',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/projekty',
      name: 'projekty',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/doswiadczenie',
      name: 'doswiadczenie',
      component: () => import('../views/ExpirienceView.vue')
    }
  ]
})

export default router
