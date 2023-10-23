import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";
import BaresComponent from "../learning/pages/bares.component.vue";
import ContactComponent from "../public/pages/contact.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: "/bares",
      name: "bares",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../learning/pages/bares.component.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../public/pages/support.component.vue"),
    }
  ]
})

export default router
