import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../pages/index')
const Main = () => import('../pages/main')
const Search = () => import('../pages/search')
const Car = () => import('../pages/car')
const Vip = ()=> import('../pages/vip')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          name: 'index',
          path: 'index',
          component: Index
        },
        {
          name: 'search',
          path: 'search',
          component: Search
        },
        {
          name: 'vip',
          path: 'vip',
          component: Vip
        }
      ]
    },
    {
      name: 'car',
      path: 'car',
      component: Car
    }
  ]
})
