<template>
  <q-input
    v-model="text"
    :placeholder="$t('Find') + '...'"
    dense
  >
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"/>
      <q-btn round dense flat icon="mdi-magnify"/>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      text: '',
      dense: false
    }
  }
}
</script>
<style lang="scss">
  /*.q-field--dense {*/
  /*height: 22px;*/
  /*}*/

  /*.q-field--standout {*/
  /*border-radius: 14px;*/
  /*}*/

  /*.q-field--control {*/
  /*border-radius: 14px;*/
  /*height: 22px;*/
  /*}*/

  /*.jay-button {*/
  /*font-size: 14px;*/
  /*}*/

</style>
