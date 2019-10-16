import { processInDataSource } from '../../datasource/index'
import { initForm, error } from '../../datasource/actions'
import { initStoreKey } from '../../datasource/mutations'
import { mode, get } from '../../datasource/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'DataGrid',
    formCheckProperty: 'columns'
  },
  getters: {
    get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    query (state, { key, rows }) {
      state[key].rows = rows
    },
    showForm (state, { key, data }) {
      state[key].currentForm = {
        template: state[key].defaultForm.template,
        parentKey: state[key].defaultForm.name,
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
      let key = payload.store.key
      let rows = await processInDataSource('query', store, payload)
      store.commit('query', { key: key, rows })
    }

  }
}
