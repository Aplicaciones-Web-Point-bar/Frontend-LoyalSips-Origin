import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import BaresComponent from "../learning/pages/bares.component.vue";
import ServicesComponent from "../public/pages/services.component.vue";
import SupportComponent from "../public/pages/support.component.vue";
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../public/pages/about.component.vue')
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
      path: "/services",
      name: "services",
      component: () => import("../public/pages/services.component.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../public/pages/support.component.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../public/pages/contact.component.vue"),
    }
  ]
})

export default router
