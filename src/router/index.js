import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TicketsView from '@/views/TicketsView.vue'
import TicketShowView from '@/views/TicketShowView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView
    },
    {
      path: '/tickets/:id',
      name: 'tickets.show',
      component: TicketShowView,
    }
  ],
})

export default router
