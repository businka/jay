import Vue from 'vue'

export function initStoreKey (state, { uid, data }) {
  Vue.set(state, uid, data)
}
