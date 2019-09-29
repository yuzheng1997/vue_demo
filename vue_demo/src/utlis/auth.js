export function getToken () {
  window.localStorage.getItem('token')
}
export function setToken (token) {
  window.localStorage.setItem('token', token)
}
export function removeToken (token) {
  window.localStorage.removeItem('token')
}
