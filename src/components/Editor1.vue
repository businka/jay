<template>
  <q-drawer
    side="right"
    overlay
    bordered
    :value="visible"
  >
    <q-toolbar
      flat
      color="white"
    >
      <q-space></q-space>
      <!--<span v-if="item && item.hasOwnProperty('_actions')">-->
        <!--<q-btn-->
          <!--v-for="(_action, index) in item._actions"-->
          <!--:key="index"-->
          <!--:loading="loadingAction"-->
          <!--flat-->
          <!--:icon="_action.icon"-->
          <!--@click="action(_action.id)"-->
        <!--&gt;</q-btn>-->
      <!--</span>-->
      <q-btn
        flat
        @click="onSave"
        icon="save"
      ></q-btn>
      <q-btn
        flat
        @click="onClose"
        icon="close"
      ></q-btn>
    </q-toolbar>
  </q-drawer>
</template>

<style>
</style>

<script>
import { defaultSource } from './WS3Browser/datasource/DataSource.vue'

export default {
  props: {
    source: {
      type: Object,
      default: defaultSource()
    }
  },
  form: () => ({
    visible: false
  }),
  methods: {
    init () {
      this.source = Object.assign(defaultSource(), this._source)
      this.query()
    },
    onClose () {
    },
    onSave () {
    }
  }
}
</script>
