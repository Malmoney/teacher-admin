import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import filesAdmin from '@/views/filesAdmin'
import welcome from '@/views/welcome'

Vue.use(Router)


const router = new Router({
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
    {
      path: '/welcome',
      component: welcome
    },
    {
      path: '/filesAdmin',
      component: filesAdmin
    },
  ]
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token");
  if (!token) {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.path == '/login') {
      next(false)
    } else {
      next();
    }
  }
})

export default router
