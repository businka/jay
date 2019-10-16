<template>
  <q-toolbar class="q-pl-sm jay-toolbar jay-bordered">
    <SearchForm :name="name" :source="source">
    </SearchForm>
    <q-space></q-space>
    <FilterButton :name="name" :source="source">
    </FilterButton>
  </q-toolbar>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  // name: 'TabBrowser',
  props: ['name', 'source'],
  // data: () => ({
  //   massOperations: 'List',
  //   section: '-',
  //   page: '-',
  //   key: '-'
  // }),
  computed: {
    // form () {
    //   let form = this.$store.state.Browser[this.name]
    //   return form || {}
    //   // toolbar: {
    //   //   items: [
    //   //     // { name: 'test', title: 'test' }
    //   //   ],
    //   //   massOperations: false,
    //   //   massOperationsBarVisible: false
    //   // }
    // },
    // massOperationsBarVisible: {
    //   get: function () {
    //     return this.form ? this.form.toolbar.massOperationsBarVisible : false
    //   },
    //   set: function (val) {
    //     this.massOperationsBarVisible({ name: this.name, data: val })
    //   }
    // },
    // massIcon: function () {
    //   return this.massOperationsBarVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'
    // }
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
    'SearchForm': () => import('./SearchForm'),
    'FilterButton': () => import('./Filter')
  }
}

</script>

<style lang="scss">
</style>
