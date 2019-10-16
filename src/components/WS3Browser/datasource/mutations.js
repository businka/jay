import Vue from 'vue'

export function initStoreKey (state, { key, data }) {
  Vue.set(state, key, data.params)
}
