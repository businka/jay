export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    params: Object,
    modeParams: Object,
    storeParams: Object
  },
  data: () => ({
    store: {},
    namespace: ''
  }),
  watch: {
    params: function () {
      console.log(`watch params ${this.$options.name} +  ${this.storeParams.uid}`)
      this.init()
    },
    modeParams () {
      console.log(`watch modeParams ${this.$options.name} +  ${this.storeParams.uid}`)
      this.init()
    }
  },
  computed: {
    data () {
      let data = {}
      if (this.store.namespace && this.store.uid) {
        try {
          data = this.$store.getters.storeData(this.store.namespace, this.store.uid, {})
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
      // if (!this.store.parentState) {
      this.initForm()
      // }
    },
    initStore () {
      if (!this.storeParams) {
        return
      }
      if (!this.namespace) {
        this.namespace = this.$options.name
      }
      this.store = {
        form: this.storeParams.form,
        uid: this.storeParams.uid,
        namespace: this.storeParams.namespace || this.namespace,
        mode: this.params.mode,
        modeParams: this.modeParams
      }

      // if (this.storeParams.parentState) {
      //   this.store.uid = this.store.parentUid
      //   this.store.namespace = this.storeParams.parentNamespace
      // }
    },
    initForm () {
      // if (!this.$store.dispatch.hasOwnProperty(`${this.namespace}/initForm`)) {
      //   return
      // }
      this.$store.dispatch(`${this.namespace}/initForm`, {
        store: this.store,
        params: this.params
      }, { root: true })
    },
    emitAction (action) {
      let _action = `action${action.name}`
      if (this.hasOwnProperty(_action)) {
        this[_action](action.data)
      } else {
        this.$emit('action', action)
      }
    },
    dispatchAction (action, data) {
      let namespace = data.namespace || this.store.namespace
      // this.$emit('action', { 'action': action, data })
      this.$store.dispatch(`${namespace}/${action}`, data, { root: true })
    }
  }
}
