import Vue from 'vue'
import VueRouter from 'vue-router'
import grandxRouter from './modules/grandex'

Vue.use(VueRouter)

const routes = [
  ...grandxRouter,
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
