<template>
  <q-toolbar class="jay-toolbar no-padding" v-if="form && form.toolBar">
    <component
      v-for="item in form.toolBar.items"
      :key="item.name"
      :params="item"
      v-bind:is="item.template"
    >
    </component>
    <q-separator vertical class="jay-space-right"></q-separator>
    <q-btn flat dense size="sm" :icon='massIcon' @click='massOperationsBarVisible = !massOperationsBarVisible'></q-btn>
  </q-toolbar>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// import { mapActions } from 'vuex'
import BaseTemplateMixin from '../mixin/baseForm'
import ChildTemplateMixin from '../mixin/formExt'

export default {
  // name: 'TabBrowser',
  // props: ['name', 'namespace'],
  // data: () => ({
  //   massOperations: 'List',
  //   section: '-',
  //   page: '-',
  //   key: '-'
  // }),
  computed: {
    massOperationsBarVisible: {
      get: function () {
        return !!(this.form.toolBar && this.form.toolBar.massOperationsBar && this.form.massOperationsBar && this.form.massOperationsBar.visible)
      },
      set: function (val) {
        this.$store.commit(`${this.store.namespace}/massOperationsBarVisible`, {
          key: this.store.key,
          value: val
        })
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
    //   this.section = this.$route.params.section
    //   this.page = this.$route.params.page
    //   this.key = `${this.section}/${this.page}`
    //   this.load({ key: this.key, active: this.$route.query.tab })
    //   // this.activeTab = this.form.default
    // }
  },
  mounted () {
    this.init()
  },
  mixins: [ChildTemplateMixin, BaseTemplateMixin],
  components: {
    'DefaultAction': () => import('./ActionButtons/DefaultAction'),
    'Action': () => import('./ActionButtons/Action')
  }
}

</script>

<style lang="scss">
  .jay-space-right {
    margin-right: 8px;
  }

</style>
