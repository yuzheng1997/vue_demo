
const getters = {
  getId: state => state.user.id,
  getName: state => state.user.name,
  getAge: state => state.user.age,
  getToken: state => state.sys.token
}
export default getters
