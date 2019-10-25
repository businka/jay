import axios from 'axios/index'
import { jsonClone } from '../../../core/clone'

export default {
  name: 'store',
  query: async (store, payload) => {
    let result = []
    try {
      // let params = payload.filter || {}
      let formNamespace = store.rootGetters['storeData']('form', payload.store.form)
      let data = store.rootGetters['storeData'](formNamespace.template, payload.store.form)
      let path = payload.store.mode.path
      result = data
      for (let i = 0; i < path.length; i++) {
        if (result.hasOwnProperty(path[i])) {
          result = result[path[i]]
        }
      }
    } catch (error) {
      console.error(error)
    }
    result = await result
    return result
  },
  update: async (store, payload) => {
    let result = []
    try {
      // let params = payload.filter || {}
      let form = store.rootGetters['storeData']('form', payload.store.form)
      let path = jsonClone(payload.store.mode.path)
      path.push(payload.data.row.__index)
      let value = jsonClone(payload.data.row)
      delete value.__index
      store.commit(`${form.template}/updateProp`, { uid: payload.store.form, path, value }, { root: true })
    } catch (error) {
      console.error(error)
    }
    await result
  },
  read: async (store, payload) => {
    let data
    try {
      data = await axios.get(`/api/${payload.params.objType}/${payload.params.objName}?id=${payload.params.item.id}`)
      return data.data
    } catch (error) {
      console.error(error)
    }
  }
}
