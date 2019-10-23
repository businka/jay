<template>
  <div class="row" v-if="data.row">
    <div class="col">
      <q-input
        :label="data.row.id"
        v-model="data.row.value"
        dense
      >
        <template v-slot:after>
          <q-btn flat dense color="negative" icon="cancel" @click.stop="cancel" />
          <q-btn flat dense color="positive" icon="save" @click.stop="set" :disable="validate(value) === false || initialValue === value" />
        </template>
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
      data: Object.assign({}, this.value)
    }
  }
  // data: () => ({
  //   data1: Object.assign({}, this.value)
  // })
}
</script>
