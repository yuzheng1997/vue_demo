import Vue from 'vue'
import Vuex from 'vuex'
import user from './modelus/user'
import sys from './modelus/sys'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    sys
  },
  getters
})

export default store
