import axios from 'axios/index'

export default {
  name: 'remote',
  initForm: async (store, data) => {
    let result
    try {
      result = await axios.get(`/form/${data.store.uid}`)
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
      data = await axios.get(`/api/${payload.params.objType}/${payload.params.objName}/query`,
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
      data = await axios.get(`/api/${payload.params.objType}/${payload.params.objName}?id=${payload.store.modeParams.id}`)
      return data.data
    } catch (error) {
      console.error(error)
    }
  }
}
