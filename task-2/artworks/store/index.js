export const state = () => ({
  searchResult: [{ artist_title: '', image_id: '' }],
  isLoading: false,
})

export const mutations = {
  SET_ITEMS(state, payload) {
    state.searchResult = payload
  },
  ADD_ITEMS(state, payload) {
    state.searchResult = [...state.searchResult, ...payload]
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },
}
export const getters = {
  searchResult(state) {
    return state.searchResult
  },
}
export const actions = {
  async fetchSearchData({ commit, dispatch }, payload) {
    try {
      const res = await this.$getRepository.search(payload)
      commit('SET_ITEMS', res.data)
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchNewPage({ commit, dispatch, state }, payload) {
    try {
      if (!state.isLoading) {
        commit('SET_LOADING', true)
        const res = await this.$getRepository.search(payload)
        if (res.data.length === payload.size) {
          commit('ADD_ITEMS', res)
          commit('SET_LOADING', false)
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  },
}
