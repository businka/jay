import axios from 'axios'

export default {
  state: {
    items: [],
    index: {},
    visible: true
  },
  mutations: {
    NavDrawerVisible (state, value) {
      state.visible = value
    },
    NavDrawerItems (state, data) {
      state.items = data.items
      state.index = data.index
    }
  },
  actions: {
    Load: async (store, payload) => {
      let { data } = await axios.get('/api/Core/NavDrawer') //, { params: payload })
      store.commit('NavDrawerItems', data)
    }
  }
}
