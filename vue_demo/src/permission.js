import router from './router'
import store from './store'
import {getToken} from './utlis/auth'

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (to.path === '/login') {
    next()
  } else {

  }
})
