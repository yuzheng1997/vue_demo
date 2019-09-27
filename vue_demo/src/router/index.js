import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/users/login.vue'
// import Main from '@/pages/index/Main.vue'
// import ItemBank from '@/pages/demo/ItemBank.vue'
// import userSearch from '@/pages/demo/userSearch.vue'
// import Search from '@/pages/demo/search.vue'
// import examItem from '@/pages/demo/examItem.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   redirect: '/search',
    //   component: import('@/pages/index/Main.vue'),
    //   children: [
    //     {
    //       path: 'userSearch',
    //       name: 'userSearch',
    //       component: userSearch
    //     },
    //     {
    //       path: 'search',
    //       name: 'search',
    //       component: Search
    //     },
    //     {
    //       path: 'itembank',
    //       name: 'ItemBank',
    //       component: ItemBank
    //     }
    //   ]
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index/Main.vue')
    }
  ]
})
