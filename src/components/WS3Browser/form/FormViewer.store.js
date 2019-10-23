import axios from 'axios'
import { initStoreKey } from '../mixinStore/mutations'

export default {
  namespaced: true,
  state: {
    namespace: 'form'
  },
  mutations: {
    initStoreKey: initStoreKey,
    NavDrawerItems (state, data) {
      state.items = data.items
      state.index = data.index
    }
  },
  actions: {
    initForm: async (store, payload) => {
      let { data } = await axios.get('/api/Core/NavDrawer') //, { params: payload })
      store.commit('NavDrawerItems', data)
    },
    load: async (store, payload) => {
      let uid = payload.uid
      let { data } = await axios.get(`/form/${uid}`) //, { params: payload })
      store.commit('initStoreKey', { uid, data })
    }
  }
}
