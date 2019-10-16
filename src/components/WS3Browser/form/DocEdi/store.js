import { processInDataSource } from '../../datasource/index'
import { initForm, error } from '../../datasource/actions'
import { initStoreKey } from '../../datasource/mutations'
import { get, mode } from '../../datasource/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'DocEdi',
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
      store.commit('read', { key: payload.store.key, form: data })
    }
  }
}
