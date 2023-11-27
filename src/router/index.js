import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HorarioView from '../views/HorarioView.vue'
import EntrarView from '../views/EntrarView.vue'
import TabelaView from '../views/TabelaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/horarios',
      name: 'horarios',
      component: HorarioView
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: TabelaView
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: EntrarView
    }
  ]
})

export default router
