import { processInDataSource } from '../../datasource/index'
import { initForm, error } from '../../datasource/actions'
import { initStoreKey } from '../../datasource/mutations'
import { get, mode } from '../../datasource/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'Browser',
    formCheckProperty: 'dataSource'
  },
  getters: {
    get: get,
    mode: mode
  },
  mutations: {
    initStoreKey: initStoreKey,
    massOperationsBarVisible (state, payload) {
      state[payload.key].massOperationsBar.visible = payload.value
    },
    query (state, { key, rows }) {
      state[key].dataSource.rows = rows
    },
    error (state, { key, error }) {
      state[key].error = error
    },
    showEditForm (state, payload) {
      let key = payload.key
      state[key].record = {
        template: state[key].defaultFormTemplate,
        objType: state[key].dataSource.objType,
        objName: state[key].dataSource.objName,
        objForm: state[key].defaultForm,
        id: payload.params.id,
        row: payload.params,
        form: {},
        visible: true
      }
    },
    hideEditForm (state, payload) {
      let key = payload.key
      state[key].record = {
        visible: false
      }
    }
  },
  actions: {
    initForm: initForm,
    error: error,

    query: async (store, payload) => {
      let key = payload.key
      let rows = await processInDataSource('query', store, payload)
      store.commit('query', { key: key, rows })
    },
    rowActivate: (store, payload) => {
      store.commit('showEditForm', payload)
    }
  }
}
