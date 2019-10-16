<template>
  <q-layout view="lHh Lpr lFf">
    <NavDrawer></NavDrawer>
    <q-page-container>
      <router-view
        :storeParams="{
          objType: this.$route.params.objType,
          objName: this.$route.params.objName,
          objForm: this.$route.params.objForm,
          parentState: false,
          mode: 'remote'
        }"
        :params="this.$route.params"
      ></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import NavDrawer from '../components/NavDrawer/NavDrawer'

export default {
  name: 'IndexLayout',
  form () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  },
  components: { NavDrawer }
}
</script>

<style>
</style>
