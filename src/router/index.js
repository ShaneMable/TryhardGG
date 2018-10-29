import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '/pages/',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  routes
})
