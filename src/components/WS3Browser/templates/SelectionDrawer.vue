<style>
  /*.v-treeview-node__root {*/
  /*height: 70px;*/
  /*}*/
</style>
<template>
  <q-drawer
    side="right"
    overlay
    bordered
    :value="name"
    width="700px"
  >
    <q-toolbar
      flat
    >
      <q-toolbar-title>Select {{ name }}</q-toolbar-title>
      <q-btn
        flat
        label="Select"
      ></q-btn>
      <q-btn
        flat
        icon="close"
        @click="$emit('cancelSelection')"
      ></q-btn>
    </q-toolbar>
    <component
      v-bind:is="source.template"
      :source="source"
    ></component>

  </q-drawer>
</template>
<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    source: Object
  },
  form: () => ({
    visible: true
  }),
  watch: {
  },
  computed: {},
  methods: {
  },
  components: {
    'TreeBrowser': () => import('./TreeBrowser')
  }
}
</script>
