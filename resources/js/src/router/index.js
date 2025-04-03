import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/login',name: 'login', component: () => import('../pages/LoginPage.vue') },
  { path: '/signup',name: 'signup', component: () => import('../pages/SignUpPage.vue') },
]

export const router = createRouter({
//   history: createMemoryHistory(),
  history: createWebHistory('/app'),
  routes,
})