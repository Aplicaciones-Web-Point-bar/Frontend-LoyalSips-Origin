import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home1.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import BaresComponent from "../LoyalSips/pages/bares.component.vue";
import ServicesComponent from "../public/pages/services.component.vue";
import SupportComponent from "../public/pages/Support/support.component.vue";
import ContactComponent from "../public/pages/contact.component.vue";
import LoginComponent from "../public/pages/login1.component.vue";
import SignupComponent from "../public/pages/signup1.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../public/pages/home/home.component.vue')
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
      component: () => import("../LoyalSips/pages/bares.component.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../public/pages/services.component.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../public/pages/Support/support.component.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../public/pages/contact.component.vue"),
    },
    {
    path: "/login",
    name: "login",
    component: () => import("../public/pages/login1.component.vue"),
    },
    {
    path: "/signup",
    name: "signup",
    component: () => import("../public/pages/signup1.component.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import('../public/pages/profile/profile.component.vue')
    },
    {
        path: "/login-register/sector-election",
        name: "LoginRegister",
        component: () => import('../public/pages/login-register/sector-election/sector-election.component.vue')
    },
    {
        path: "/login-register/login-register-cliente",
        name: "Login-register-cliente",
        component:() => import('../public/pages/login-register/login-register-cliente/login-register-cliente.component.vue')
    },
    {
        path: "/login-register/login-register-empresa",
        name: "Login-register-empresa",
        component:()=> import('../public/pages/login-register/login-register-empresa/login-register-empresa.component.vue')
    }
  ]

});


export default router;
