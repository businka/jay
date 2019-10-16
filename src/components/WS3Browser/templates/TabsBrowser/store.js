import { initForm, error } from '../../datasource/actions'
import { initStoreKey } from '../../datasource/mutations'
import { mode, get } from '../../datasource/getters'

export default {
  namespaced: true,
  state: {},
  getters: {
    get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    SetActiveTab (state, { storeKey, data }) {
      state[storeKey].active = data
    }
  },
  actions: {
    initForm: initForm,
    error: error,
    setActiveTab ({ commit }, { storeKey, data }) {
      commit('SetActiveTab', { parentKey: storeKey, data })
    }
  }
}
