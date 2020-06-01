import Vue from 'vue'
import Router from 'vue-router'

import login from '@/view/login'
import demo from '@/view/demo'
import zanPick from '@/view/demo/zanPick'




Vue.use(Router)

export default new Router({
  mode: 'history', //切换路径模式，变成history模式
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {  title: 'login',keepAlive: true },
    } ,
    {
      path: '/',
      name: 'demo',
      component: demo,
      meta: {  title: 'demo',keepAlive: true },
    },
  
    {
      path: '/zanPick',
      name: 'zanPick',
      component: zanPick,
      meta: {  title: 'zanPick', keepAlive: true },
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})
