import axios from 'axios/index'

export default {
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
