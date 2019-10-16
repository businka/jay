import axios from 'axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {},
  mutations: {
    Update (state, { key, data }) {
      Vue.set(state, key, data)
    },
    SetActiveTab (state, { key, data }) {
      state[key].active = data
    }
  },
  actions: {
    load: async ({ commit, state }, { key, active }) => {
      if (state.hasOwnProperty(key)) {
        return
      }
      try {
        let { data } = await axios.get(`/api/${key}/TabsBrowser`)
        if (active) {
          data.active = active
        }
        commit('Update', { key: key, form: data })
      } catch (error) {
        console.log(error)
      }
    },
    setActiveTab ({ commit }, { key, data }) {
      commit('SetActiveTab', { key: key, form: data })
    }
  }
}
