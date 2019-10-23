<template>
  <div class="row" v-if="row">
    <div class="col">
      <q-input
        :label="row.id"
        v-model="row.value"
        dense
        autofocus
      >
        <q-btn flat dense color="negative" icon="cancel" @click.stop="cancel"></q-btn>
        <q-btn
          flat
          dense
          color="positive"
          icon="save"
          @click.stop="set"
        ></q-btn>
      </q-input>
    </div>
  </div>
</template>
<script>

export default {
  name: 'TEST',
  props: ['initialValue', 'value', 'emitValue', 'validate', 'set', 'cancel'],
  data: function () {
    return {
      row: Object.assign({}, this.value.row)
    }
  }
  // data: () => ({
  //   data1: Object.assign({}, this.value)
  // })
}
</script>
