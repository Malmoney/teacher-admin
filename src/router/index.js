import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  base:"/admin/",
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
  ]
})