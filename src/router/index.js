import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login }
]

export default new Router({
  mode: 'history',
  routes
})
