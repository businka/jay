<template>
  <q-toolbar v-if="massOperationsBarVisible" class="jay-toolbar">
    <SelectAll></SelectAll>
    <q-separator spaced vertical></q-separator>
    <q-btn
      v-for="item in params.items"
      :key="item.id"
      :icon="item.icon"
      flat
      @click="$emit('massOper', item.id)"
    >
    </q-btn>
  </q-toolbar>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// import { mapActions } from 'vuex'
import BaseTemplateMixin from '../mixinTemplate/baseForm'
import ChildTemplateMixin from '../mixinTemplate/formExt'

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
        return this.data.massOperationsBarVisible
      },
      set: function (val) {
        this.$store.commit(`${this.store.namespace}/massOperationsBarVisible`, { uid: this.store.uid, value: val })
      }
    }
  },
  methods: {
    initForm () {
    }
  },
  // initForm () {
  //   this.section = this.$route.params.section
  //   this.page = this.$route.params.page
  //   this.key = `${this.section}/${this.page}`
  //   this.load({ key: this.key, active: this.$route.query.tab })
  //   // this.activeTab = this.form.default
  // }
  // },
  // mounted () {
  // this.initForm()
  // },
  mixins: [ChildTemplateMixin, BaseTemplateMixin],
  components: {
    // 'BrowserToolBar': () => import('../../components/BrowserToolBar'),
    // 'Browser': () => import('../Browser/Browser'),
    // 'TreeBrowser': () => import('../TreeBrowser/Index')
    'SelectAll': () => import('./SelectAll')
  },
  mounted () {
    this.init()
  }
}

</script>

<style lang="scss">
</style>
