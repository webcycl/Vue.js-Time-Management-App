import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Error from '../Error.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
        {
      path: '/home',
      name: 'home',
      component: Home,
    },
      {
    path: "/error",
    name: "error",
    component: Error,
  },
  ],
})

export default router
