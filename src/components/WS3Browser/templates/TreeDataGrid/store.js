import { processInDataSource } from '../../datasource/index'
import { initForm, error } from '../../datasource/actions'
import { initStoreKey } from '../../datasource/mutations'
import { mode, get } from '../../datasource/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'treeDataGrid',
    formCheckProperty: 'columns'
  },
  getters: {
    get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    child (state, { key, row, child }) {
      state[key].rows[row.__index]['child'] = child
    },
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

    child: async (store, payload) => {
      let key = payload.store.key
      let row = payload.row
      payload.filter = { parent: row.id }
      let child = await processInDataSource('query', store, payload)
      store.commit('child', { key: key, row: payload.row, child })
    },
    query: async (store, payload) => {
      let key = payload.store.key
      let rows = await processInDataSource('query', store, payload)
      store.commit('query', { key: key, rows })
    }

  }
}
