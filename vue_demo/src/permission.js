import router from './router'
// import store from './store'
import {getToken} from './utlis/auth'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.name) !== -1) {
      next()
    } else {
      next(`/login`)
    }
  }
})
