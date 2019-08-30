
const data = {
  state: {
    id: -1,
    name: '',
    password: '',
    age: ''
  },
  mutations: {
    setId: (state, id) => {
      state.id = id
    },
    setName: (state, name) => {
      state.name = name
    }
  }
}
export default data
