import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/users/login.vue'
import Main from '@/pages/index/Main.vue'
import ItemBank from '@/pages/demo/ItemBank.vue'
import Search from '@/pages/demo/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'Main',
      component: Main
    },
    {
      path: '/itembank',
      name: 'ItemBank',
      component: ItemBank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
