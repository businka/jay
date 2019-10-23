import { initForm, error } from '../../mixinStore/actions'
import { initStoreKey } from '../../mixinStore/mutations'
// import { mode, get } from '../../mixinStore/getters'

export default {
  namespaced: true,
  state: {},
  // getters: {
  //   get: get,
  //   mode: mode
  // },
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
      commit('SetActiveTab', { parentUid: storeKey, data })
    }
  }
}
