import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DebounceView from '../views/DebounceView.vue'
import ThrottleView from '../views/ThrottleView.vue'
import OtherContent from '../views/OtherContent.vue'
import DebounceExample from '../views/DebounceExample.vue'
import ThrottleExample from '../views/ThrottleExample.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Debounce',
    name: 'Debounce',
    component: DebounceView
  },
  {
    path: '/Throttle',
    name: 'Throttle',
    component: ThrottleView
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: OtherContent
  },
  {
    path: '/DebounceExample',
    name: 'DebounceExample',
    component: DebounceExample
  },
  {
    path: '/ThrottleExample',
    name: 'ThrottleExample',
    component: ThrottleExample
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
