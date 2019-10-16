export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    namespace: {
      type: String,
      default: ''
    },
    params: Object,
    storeParams: Object
  },
  data: () => ({
    store: {}
  }),
  watch: {
    params: function () {
      this.init()
    }
  },
  computed: {
    form () {
      let data = {}
      if (this.store.namespace && this.store.key) {
        try {
          data = this.$store.getters[`${this.store.namespace}/get`](this.store.key)
        } catch (e) {
          if (!this.$store.state.hasOwnProperty(this.store.namespace)) {
            throw new Error(`namespace not found in store - ${this.store.namespace}`)
          } else {
            throw e
          }
        }
      }
      return data
    }
  },
  methods: {
    init () {
      this.initStore()
      if (!this.store.parentState) {
        this.initForm()
      }
    },
    initStore () {
      if (!this.storeParams) {
        return
      }
      this.store = {
        parentNamespace: this.storeParams.parentNamespace,
        parentObjType: this.storeParams.parentObjType,
        parentObjName: this.storeParams.parentObjName,
        parentObjForm: this.storeParams.parentObjForm,
        parentKey: this.storeParams.parentKey || `${this.storeParams.parentObjType}/${this.storeParams.parentObjName}/${this.storeParams.parentObjForm}`,
        parentState: this.storeParams.parentState || false,
        objType: this.storeParams.objType,
        objName: this.storeParams.objName,
        objForm: this.storeParams.objForm,
        namespace: this.storeParams.namespace || this.namespace || this.$options.name,
        mode: this.storeParams.mode || 'remote'
      }

      if (this.storeParams.parentState) {
        this.store.key = this.store.parentKey
        this.store.namespace = this.storeParams.parentNamespace
      } else {
        this.store.key = this.storeParams.key || `${this.store.objType}/${this.store.objName}/${this.store.objForm}`
      }
    },
    async initForm () {
      await this.$store.dispatch(`${this.store.namespace}/initForm`, {
        store: this.store,
        params: this.params
      }, { root: true })
    },
    emitAction (name, params) {
      let action = `action${name}`
      if (this.hasOwnProperty(action)) {
        this[action](params)
      } else {
        this.$emit('action', { name, params })
      }
    },
    dispatchAction (namespace, action, payload) {
      namespace = namespace || this.store.namespace
      this.$store.dispatch(`${namespace}/${action}`, payload, { root: true })
    }
  }
}
