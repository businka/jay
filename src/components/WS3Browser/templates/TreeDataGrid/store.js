import { processInDataSource } from '../../mixinStore/index'
import { initForm, error } from '../../mixinStore/actions'
import { initStoreKey } from '../../mixinStore/mutations'
import { mode } from '../../mixinStore/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'treeDataGrid',
    formCheckProperty: 'columns'
  },
  getters: {
    // get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    child (state, { key, row, child }) {
      state[key].rows[row.__index]['child'] = child
    },
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

    child: async (store, payload) => {
      let key = payload.store.uid
      let row = payload.row
      payload.filter = { parent: row.id }
      let child = await processInDataSource('query', store, payload)
      store.commit('child', { key: key, row: payload.row, child })
    },
    query: async (store, payload) => {
      let uid = payload.store.uid
      let rows = await processInDataSource('query', store, payload)
      store.commit('query', { uid, rows })
    },
    rowActivate: (store, payload) => {
      store.commit('showEditForm', payload)
    }
  }
}
