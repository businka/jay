import { hasMode } from './index'

export async function error (store, { storeKey, error }) {
  console.error(`${store.state.namespace}: ${error.message} (${error.detail})`)
  if (store.state.hasOwnProperty(storeKey)) {
    store.commit('Error', error)
  }
}

export async function initForm (store, data) {
  let storeParams = data.store
  let _params = data.params
  let key = storeParams.key
  if (!store.state.hasOwnProperty(key)) {
    if (!_params || (_params && !_params.hasOwnProperty(store.state['formCheckProperty']))) {
      let mode = storeParams.mode || 'remote'
      if (!hasMode(store, mode, storeParams.key)) {
        throw new Error()('not supported')
      }
      let handler = store.getters.mode({ mode })
      await handler.initForm(store, data)
      // _params = Object.assign(rawParams, _params)
    }
    store.commit('initStoreKey', { key, data })
  }
}
