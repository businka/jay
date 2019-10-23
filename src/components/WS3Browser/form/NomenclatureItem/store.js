import Vue from 'vue'
import { processInDataSource } from '../../mixinStore/index'
import { initForm, error } from '../../mixinStore/actions'
import { initStoreKey } from '../../mixinStore/mutations'
import { mode, getProps } from '../../mixinStore/getters'

export default {
  namespaced: true,
  state: {
    namespace: 'docEmissionIC',
    formCheckProperty: 'columns'
  },
  getters: {
    // get: get,
    mode: mode,
    getProps: getProps
  },
  mutations: {
    initStoreKey: initStoreKey,
    read (state, { uid, data }) {
      state[uid].item = data
      state[uid].loading = false
    },
    loading (state, { uid, value }) {
      state[uid].loading = value
    },
    updateItemProps (state, { uid, path, value }) {
      let result = state[uid]
      let i
      for (i = 0; i < path.length - 1; i++) {
        if (result.hasOwnProperty(path[i])) {
          result = result[path[i]]
        } else {
          throw new Error(`props ${name} not found in state[${uid}] `)
        }
      }
      if (result.hasOwnProperty(path[i])) {
        result[path[i]] = value
      } else {
        Vue.set(result, path[i], value)
      }
    }
  },
  actions: {
    initForm: initForm,
    error: error,
    read: async (store, payload) => {
      store.commit('loading', { uid: payload.store.uid, value: true })
      let data = await processInDataSource('read', store, payload)
      store.commit('read', { uid: payload.store.uid, data: data })
    }
  }
}
