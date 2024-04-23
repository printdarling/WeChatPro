import { createRouter, createWebHistory } from 'vue-router'
import WeChatHome from "../components/WeChatHome.vue";
import login from "../components/login.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/WeChatHome',
      name: 'WeChatHome',
      component: WeChatHome,
    },
  ]
})

export default router
