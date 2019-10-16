<template>
  <q-btn
    rounded
    :size="params.size || 'sm'"
    :label="params.title?$t(`ActionButtons.${params.title}`):''"
    class="jay-space-right"
    color="accent"
  ></q-btn>
</template>
<script>

export default {
  // name: 'TabBrowser',
  props: ['params'],
  // data: () => ({
  //   massOperations: 'List',
  //   section: '-',
  //   page: '-',
  //   key: '-'
  // }),
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
  /*.jay-primary-border {*/
    /*border: 1px solid rgb(217, 71, 0);*/
  /*}*/
  /*.jay-button {*/
    /*font-size: 14px;*/
  /*}*/

</style>
