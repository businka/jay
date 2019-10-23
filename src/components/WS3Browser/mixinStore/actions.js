// import { hasMode } from './index'

export async function error (store, { storeKey, error }) {
  console.error(`${store.state.namespace}: ${error.message} (${error.detail})`)
  if (store.state.hasOwnProperty(storeKey)) {
    store.commit('Error', error)
  }
}

export function initForm (store, data) {
  let _store = data.store
  let _params = data.params
  let uid = _store.uid
  if (!store.state.hasOwnProperty(uid) && _params.store) {
    store.commit('initStoreKey', { uid, data: _params.store })
  }
}
