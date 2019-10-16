import axios from 'axios/index'

export default {
  initForm: async (store, data) => {
    let result
    try {
      result = await axios.get(`/form/${data.store.key}`)
      data.params = result.data
      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },
  query: async (store, payload) => {
    let data
    try {
      let params = payload.filter || {}
      data = await axios.get(`/api/${payload.store.objType}/${payload.store.objName}/query`,
        { params }
      )
      return data.data
    } catch (error) {
      console.error(error)
    }
    return []
  },
  read: async (store, payload) => {
    let data
    try {
      data = await axios.get(`/api/${payload.store.objType}/${payload.store.objName}?id=${payload.params.id}`)
      return data.data
    } catch (error) {
      console.error(error)
    }
  }
}
