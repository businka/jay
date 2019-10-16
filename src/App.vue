<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component(
  'DocEmissionIC',
  () => import('./components/WS3Browser/form/DocEmissionIC/DocEmissionIC')
)
Vue.component(
  'DocEdi',
  () => import('./components/WS3Browser/form/DocEdi/DocEdi')
)

export default {
  name: 'App'
}
</script>

<style lang="scss">
  .jay-cursor-color {
    color: #d94700;
  }
</style>
