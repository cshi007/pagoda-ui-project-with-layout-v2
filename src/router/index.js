import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('../views/index')
  },
  {
    path: '/layout1',
    component: () => import('../views/layout1/index'),
    children: [{
      path: '',
      redirect: 'page1'
    }, {
      path: 'page1',
      component: () => import('../views/layout1/page1/')
    }, {
      path: 'page1/detail1',
      component: () => import('../views/layout1/page1/detail1')
    }, {
      path: 'page2',
      component: () => import('../views/layout1/page2')
    }]
  },
  {
    path: '/layout2',
    component: () => import('../views/layout2')
  }
]

export default new Router({
  routes
})
