<template>
  <q-btn
    class="jay-space-right"
    :icon="params.icon"
    flat
    dense
    round
    color="info"
  >
    <q-tooltip>
      {{params.title?$t(`ActionButtons.${params.title}`):''}}
    </q-tooltip>

  </q-btn>
</template>
<script>

export default {
  // name: 'TabBrowser',
  props: ['name', 'namespace', 'params'],
  // data: () => ({
  //   massOperations: 'List',
  //   section: '-',
  //   page: '-',
  //   key: '-'
  // }),
  computed: {
    form () {
      let data
      if (this.namespace) {
        data = this.$store.getters[`${this.namespace}/get`](this.name)
      }
      return data || {}
      // toolbar: {
      //   items: [
      //     // { name: 'test', title: 'test' }
      //   ],
      //   massOperations: false,
      //   massOperationsBarVisible: false
      // }
    },
    massOperationsBarVisible: {
      get: function () {
        return !!(this.form.toolBar && this.form.toolBar.massOperations && this.form.massOperations && this.form.massOperations.visible)
      },
      set: function (val) {
        this.$store.commit(`${this.namespace}/MassOperationsVisible`)({ name: this.name, data: val })
      }
    },
    massIcon: function () {
      return this.massOperationsBarVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'
    }
  },
  methods: {
    // ...mapActions('TabsBrowser', [
    //   'load',
    //   'setActiveTab'
    // ]),
    // initForm () {
    //   this.section = this.$route.params.section
    //   this.page = this.$route.params.page
    //   this.key = `${this.section}/${this.page}`
    //   this.load({ key: this.key, active: this.$route.query.tab })
    //   // this.activeTab = this.form.default
    // }
  },
  mounted () {
    // this.initForm()
  },
  components: {
    // 'BrowserToolBar': () => import('../../components/BrowserToolBar'),
    // 'Browser': () => import('../Browser/Browser'),
    // 'TreeBrowser': () => import('../TreeBrowser/Index')
  }
}

</script>

<style lang="scss">
  .jay-primary-border {
    border: 1px solid rgb(217, 71, 0);
  }

  /*.jay-button {*/
  /*font-size: 14px;*/
  /*}*/

</style>
