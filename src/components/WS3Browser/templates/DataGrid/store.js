import { processInDataSource } from '../../mixinStore/index'
import { initForm, error } from '../../mixinStore/actions'
import { initStoreKey } from '../../mixinStore/mutations'
import { mode } from '../../mixinStore/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'DataGrid',
    formCheckProperty: 'columns'
  },
  getters: {
    // get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    query (state, { uid, rows }) {
      state[uid].rows = rows
    },
    showForm (state, { key, data }) {
      state[key].currentForm = {
        template: state[key].defaultForm.template,
        parentUid: state[key].defaultForm.name,
        parentNamespace: state[key].defaultForm.name,
        visible: true,
        form: data

      }
    }
  },
  actions: {
    initForm: initForm,
    error: error,

    query: async (store, payload) => {
      let uid = payload.store.uid
      let rows = await processInDataSource('query', store, payload)
      store.commit('query', { uid, rows })
    },
    update: async (store, payload) => {
      await processInDataSource('update', store, payload)
      store.dispatch('query', payload)
    }

  }
}
