import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LeadershipPage from './components/LeadershipPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/leadership', component: LeadershipPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router