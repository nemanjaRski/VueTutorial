const userBase = {
    state: {
        users: [{ username: 'manas', password: 'manas' }]
    },
    getters: {
      checkUsernamPassword(state)
      {
        return user => state.users.filter(
          (value) => value.username === user.username && value.password === user.password
        ).length !== 0
      },
      userExists(state)
      {
        return user => state.users.filter(
          (value) => value.username === user.username
        ).length !== 0
      }
    },
    mutations: {
      registerUser(state, user)
      {
        state.users.push(user)
      }
    },
  }

  export default userBase