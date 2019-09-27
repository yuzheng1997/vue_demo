import api from '@/api/api.js'
import {getToken, setToken} from '@/utlis/auth'

const user = {
  state: {
    id: '',
    name: '',
    phone: '',
    email: '',
    token: ''
  },
  mutations: {
    setId: (state, id) => {
      state.id = id
    },
    setName: (state, name) => {
      state.name = name
    },
    setPhone: (state, phone) => {
      state.phone = phone
    },
    setEmail: (state, email) => {
      state.email = email
    },
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        api.userApi.login(userInfo).then(res => {
          if (res && res.data) {
            commit('setToken', res.data.token)
            setToken(res.data.token)
            resolve()
          }
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        api.userApi.getUserInfo(getToken).then(res => {
          if (res && res.data) {
            commit('setId', 'aa')
            commit('setName', 'vvv')
            commit('setEmail', 'sss')
            resolve(res.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
