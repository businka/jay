<template>
  <q-table
    :title="source.title"
    :data="source.form"
    :columns="source.columns"
    row-key="id"
  ></q-table>
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
  }
}
</script>
