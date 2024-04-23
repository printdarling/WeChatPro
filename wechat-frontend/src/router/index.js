import { createRouter, createWebHistory } from 'vue-router'
import WeChatHome from "../components/WeChatHome.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WeChatHome',
      component: WeChatHome,
    },
  ]
})

export default router
