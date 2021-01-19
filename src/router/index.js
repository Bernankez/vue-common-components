import Vue from 'vue'
import VueRouter from 'vue-router'
import examples from './examples';

Vue.use(VueRouter)

const routes = [
  ...examples,
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/home.vue"),
    meta: {
      title: '首页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
