import Vue from 'vue'
import Vuex from 'vuex'

import NavDrawer from '../core/components/NavDrawer/store'
import TabsBrowser from '../components/WS3Browser/templates/TabsBrowser/store'
import Browser from '../components/WS3Browser/templates/Browser/store'
import DataGrid from '../components/WS3Browser/templates/DataGrid/store'
import treeDataGrid from '../components/WS3Browser/templates/treeDataGrid/store'
import DocEdi from '../components/WS3Browser/form/DocEdi/store'
import DocEmissionIC from '../components/WS3Browser/form/DocEmissionIC/store'
// import SyncBrowserDataSource from '../components/WS3Browser/datasource/SyncBrowserDataSource.store'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      form: {}
    },
    getters: {
      storeData: (state, getters) => (namespace, storeKey) => {
        return getters(`${namespace}/get`)(storeKey)
      }
    },
    modules: {
      NavDrawer,
      TabsBrowser,
      Browser,
      DataGrid,
      treeDataGrid,
      DocEdi,
      DocEmissionIC
      // SyncBrowserDataSource
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
