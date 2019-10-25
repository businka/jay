<template>
  <q-drawer
    side="right"
    bordered
    :value="params.visible"
  >
    <component
      v-if="toolbar"
      v-bind:is="toolbar.template"
      :params="toolbar"
      :modeParams="params.item"
      :storeParams="{
        form: params.form,
        uid: params.form,
      }"
    ></component>
    <component
      v-if="form"
      v-bind:is="form.template"
      :params="form"
      :modeParams="params.item"
      :storeParams="{
          form: params.form,
          uid: params.form,
        }"
    ></component>
  </q-drawer>
</template>
<script>

import { emitAction } from '../mixinTemplate/action'

export default {
  name: 'RightDrawerFormViewer',
  props: {
    'params': Object
  },
  // data: () => ({
  //   template: null
  // }),
  watch: {
    params () {
      this.init()
    }
  },
  computed: {
    item () {
      return this.params.item
    },
    form () {
      return this.$store.getters['storeData']('form', this.params.form)
    },
    toolbar () {
      try {
        return this.form.components.toolBar
      } catch {
        return null
      }
    }
  },
  methods: {
    init () {
      if (!this.$store.getters['storeData']('form', this.params.form)) {
        this.$store.dispatch(`form/load`, {
          uid: this.params.form,
          params: this.params
        }, { root: true })
      }
    },
    onClose () {
      this.emitAction({ name: 'CloseForm', data: { name: this.name } })
    },
    emitAction
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
</style>
