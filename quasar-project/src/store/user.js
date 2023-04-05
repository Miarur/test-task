const state = {
  userInfo: null
}

const mutations = {
  setUserInfo (state, payload) {
    state.userInfo = { ...payload }
  }
}

const actions = {
  async initUserInfo ({ commit }) {
    const response = await fetch('http://api.givemewish.ru/users/i/info/my')
    const data = await response.json()
    commit('setUserInfo', data)
  }
}
export default {
  state,
  mutations,
  actions
}
