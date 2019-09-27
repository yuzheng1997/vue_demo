import {Message} from 'element-ui'
import Vue from 'vue'

Vue.prototype.success = (msg) => {
  Message({
    message: msg,
    type: 'success'
  })
}

Vue.prototype.warning = (msg) => {
  Message({
    message: msg,
    type: 'warning'
  })
}

Vue.prototype.info = (msg) => {
  Message({
    message: msg,
    type: 'info'
  })
}

Vue.prototype.error = (msg) => {
  Message({
    message: msg,
    type: 'error'
  })
}
