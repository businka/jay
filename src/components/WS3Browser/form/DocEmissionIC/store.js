import { processInDataSource } from '../../mixinStore/index'
import { initForm, error } from '../../mixinStore/actions'
import { initStoreKey } from '../../mixinStore/mutations'
import { get, mode } from '../../mixinStore/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'docEmissionIC',
    formCheckProperty: 'columns'
  },
  getters: {
    get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    read (state, { key, data }) {
      state[key].form = data
    }
  },
  actions: {
    initForm: initForm,
    error: error,
    read: async (store, payload) => {
      let data = await processInDataSource('read', store, payload)
      store.commit('read', { key: payload.store.uid, form: data })
    }
  }
}
