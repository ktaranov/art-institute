export const state = () => ({
  searchResult: []
})

export const mutations = {
  SET_ITEMS (state, payload) {
    state.searchResult = payload
  }
}
export const getters = {
  searchResult(state) {
    return state.searchResult
  }
}
export const actions = {
  async fetchSearchData ({ commit, dispatch }, payload) {
    try {
      const res = await this.$getRepository.search(payload)
      for await (const item of res.data) {
        item.image_id = await dispatch('fetchItemImageId', item.id)
      }
      commit('SET_ITEMS', res)
    } catch (error) {
      console.log(error)
    }
  },
  async fetchItemImageId({ commit }, id) {
    try {
      const resp = await this.$getRepository.getPicImageId(id);
      return resp.data.image_id
    } catch (error) {
      console.log(error)
    }
  }
}
