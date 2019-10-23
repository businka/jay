<template>
  <q-drawer
    side="right"
    bordered
    :value="params.visible"
  >
    <q-toolbar
      flat
    >
      <!--<component-->
      <!--v-bind:is="form.template"-->
      <!--:params="form"-->
      <!--:storeParams="{-->
      <!--form: params.form,-->
      <!--uid: params.form,-->
      <!--mode: 'remote'-->
      <!--}"-->
      <!--&gt;</component>-->
      <q-space></q-space>
      <!--<q-btn-->
      <!--flat-->
      <!--dense-->
      <!--@click="onSave"-->
      <!--icon="save"-->
      <!--&gt;</q-btn>-->
      <q-btn
        flat
        dense
        @click="onClose"
        icon="close"
      ></q-btn>
    </q-toolbar>
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
