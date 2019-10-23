export async function processInDataSource (method, store, payload) {
  let key, data, mode, _method
  try {
    key = payload.store.uid
  } catch (e) {
    throw new Error(`store key '${method}' not found`)
  }
  data = store.state[key]
  mode = store.getters.mode(payload.store)
  try {
    _method = mode[method]
  } catch (e) {
    throw new Error(`method '${method}' not found in datasource ${data.mode}`)
  }

  let result = await _method(store, payload)
  return result
}

/**
 * @return {boolean}
 */
export function DataAvailabilityCheck (data, prop) {
  return data.hasOwnProperty(prop)
}

export function hasMode (store, mode, storeKey) {
  let modeGetter
  try {
    modeGetter = store.getters.mode
  } catch (e) {
    store.dispatch('error', {
      key: storeKey,
      error: {
        message: 'getter node not found'
      }
    })
    return false
  }
  if (modeGetter({ key: storeKey, mode })) {
    return true
  } else {
    store.dispatch('error', {
      key: storeKey,
      error: {
        message: 'not supported datasource mode',
        detail: `mode: ${mode}, storeKey: ${storeKey}`
      }
    })
    return false
  }
}
