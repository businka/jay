<template>
  <q-drawer
    side="right"
    overlay
    bordered
    v-if="data"
    :value="data.visible"
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
import BaseTemplateMixin from '../../mixin/baseForm'
import TemplateMixin from '../../mixin/form'

export default {
  name: 'DocEmissionIC',
  props: {
    name: {
      type: String,
      default: 'DocEmissionIC'
    },
    namespace: {
      type: String,
      default: 'DocEmissionIC'
    }
  },
  watch: {
    data: function (val) {
      if (!this.data.id && this.form) {
        return
      }
      this.$store.dispatch(`${this.store.namespace}/read`, {
        store: this.store,
        params: { id: this.data.id }
      }, { root: true })
    }
  },
  computed: {
    data () {
      let data = {}
      if (this.store.namespace && this.store.key) {
        data = this.$store.getters[`${this.store.parentNamespace}/get`](this.store.parentKey, 'record')
      }
      return data
    }
  },
  methods: {
    onClose () {
      this.$store.commit(`${this.store.parentNamespace}/hideEditForm`, { key: this.store.parentKey }, { root: true })
    },
    onSave () {
    }

  },
  mixins: [BaseTemplateMixin, TemplateMixin],
  mounted () {
    this.init()
  }
}
</script>
