<template>
  <q-layout view="lHh Lpr lFf">
    <NavDrawer></NavDrawer>
    <q-page-container>
      <component
        v-if="form"
        v-bind:is="form.template"
        :params="form"
        :storeParams="{
          form: this.uid,
          uid: this.uid,
        }"
      ></component>
    </q-page-container>
  </q-layout>
</template>

<script>
import NavDrawer from '../../../core/components/NavDrawer/NavDrawer'
// import store1 from './FormViewer.store'

export default {
  name: 'FormViewer',
  // data: () => ({
  //   template: null
  // }),
  watch: {
    $route: function (value) {
      this.loadForm()
    }
  },
  computed: {
    uid () {
      let r = this.$route.params
      return `${r.objType}/${r.objName}/${r.objForm}`
    },
    form () {
      if (this.uid) {
        return this.$store.getters['storeData']('form', this.uid)
      }
      return {}
    }
  },
  methods: {
    loadForm () {
      if (!this.$store.getters['storeData']('form', this.uid)) {
        this.$store.dispatch(`form/load`, {
          uid: this.uid
        }, { root: true })
      }
    }
  },
  components: {
    NavDrawer
  },
  mounted () {
    this.loadForm()
  }
}
</script>

<style>
</style>
