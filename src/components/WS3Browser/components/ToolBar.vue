<template>
  <q-toolbar class="jay-toolbar no-padding" v-if="data && params && params.items">
    <component
      v-for="item in params.items"
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
import BaseTemplateMixin from '../mixinTemplate/baseForm'
import Space from './ActionButtons/Space'
// import ChildTemplateMixin from '../mixinStore/formExt'

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
        return !!(this.data.massOperationsBar && this.data.massOperationsBarVisible)
      },
      set: function (val) {
        this.$store.commit(`${this.store.namespace}/massOperationsBarVisible`, {
          uid: this.store.uid,
          value: val
        })
      }
    },
    massIcon: function () {
      return this.massOperationsBarVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'
    }
  },
  methods: {
    initForm () {}
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
  mixins: [BaseTemplateMixin],
  components: {
    'DefaultAction': () => import('./ActionButtons/DefaultAction'),
    'Action': () => import('./ActionButtons/Action'),
    Space
  }
}

</script>

<style lang="scss">
  .jay-space-right {
    margin-right: 8px;
  }

</style>
