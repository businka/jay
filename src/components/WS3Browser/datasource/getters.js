import remote from './remote'

export const modes = {
  remote
}

export function mode (state) {
  return function (payload) {
    let mode
    if (payload.hasOwnProperty('mode')) {
      try {
        mode = payload.mode
      } catch (e) {
        throw new Error(e)
      }
    } else if (payload.hasOwnProperty('key')) {
      mode = state[payload.key].mode
    }
    return modes[mode]
  }
}

export function get (state) {
  return function (key, name) {
    if (name) {
      if (!state.hasOwnProperty(key)) {
        throw new Error(`not found key '${key}' in state ${state.namespace}`)
      }
      if (!state[key].hasOwnProperty(name)) {
        throw new Error(`props ${name} not found in state[${key}] `)
      }
      return state[key][name]
    } else {
      if (state[key]) {
        return state[key]
      }
    }
    return {}
  }
}
