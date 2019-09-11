const user = {
  state: {
    id: -1,
    name: '',
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
export default user
