<template>
  <q-page>
    <BrowserTabs
      :tabs="tabs"
    >
      <template #toolbar="parent">
        <q-tab-panel name="doc1">
          <q-btn @click="action('ds1', 'delete')">+doc1</q-btn>
          <q-btn>doc11</q-btn>
        </q-tab-panel>

        <q-tab-panel name="doc2">
          <q-btn>+doc2</q-btn>
          <q-btn>doc2</q-btn>
        </q-tab-panel>
      </template>
      <template #content="parent">
        <q-tab-panel name="doc1">
          <DataSource
            :_source="ds1"
            :ref="ds1"
          >
            <template #content="parent">
              <Browser
                :source="parent.source"
                @action="action"
              >
                <template #mass-operations="parent">
                  <q-btn @click="parent.action('ds1', 'delete')">delete1</q-btn>
                  <q-btn @click="action('ds1', 'delete')">delete</q-btn>

                </template>
                <template #content="parent">
                  <Grid :source="parent.source" @action="parent.action">

                  </Grid>
                </template>
              </Browser>
              <Editor1 :source="parent.source"></Editor1>
            </template>
          </DataSource>
        </q-tab-panel>

        <q-tab-panel name="doc2">
          <DataSource
            :_source="ds2"
            :ref="ds2.name"
          >
            <template #content="parent">
              <Browser
                :source="parent.source"
                @action="action"
              >
                <template #mass-operations="parent">
                  <q-btn @click="parent.action('ds1', 'delete')">delete1</q-btn>
                  <q-btn @click="action('ds1', 'delete')">delete</q-btn>

                </template>
                <template #content="parent">
                  <Grid :source="parent.source" @action="parent.action">

                  </Grid>
                </template>
              </Browser>
            </template>
          </DataSource>
        </q-tab-panel>
      </template>
    </BrowserTabs>
  </q-page>
</template>

<style>
</style>

<script>
import BrowserTabs from '../components/WS3Browser/templates/TabsBrowser/TabsBrowser.vue'
import Browser from '../components/WS3BrowserV/Browser.vue'
import DataSource from '../components/WS3Browser/datasource/DataSource.vue'
import Grid from '../components/WS3Browser/components/Grid.vue'
import Editor1 from '../components/Editor1'

export default {
  form: () => ({
    tabs: [
      { id: 'doc1' },
      { id: 'doc2' }
    ],
    ds1: {
      name: 'ds1'
      // name: 'ds1',
      // columns: [
      //   { name: 'id', field: 'id', label: 'id' },
      //   { name: 'name', field: 'name', label: 'name' }
      // ],
      // form: [
      //   { id: 1, name: 'ds1-1' },
      //   { id: 2, name: 'ds1-2' }
      // ],
      // massOperations: {
      //   visible: false,
      //   bth: [{ id: 'delete', icon: 'delete' }]
      // }
    },
    ds2: {
      name: 'ds2'
      // columns: [
      //   { name: 'id', field: 'id', label: 'id' },
      //   { name: 'name', field: 'name', label: 'name' }
      // ],
      // form: [
      //   { id: 1, name: 'ds2-1' },
      //   { id: 2, name: 'ds2-2' }
      // ]
    }
  }),
  methods: {
    init () {
      console.log('test')
      // ds1 = this.$refs.ds1
    },
    action (componentName, actionName, actionParam) {
      if (this.$refs[componentName]) {
        this.$refs[componentName][actionName](actionParam)
      } else {
        this.$emit('action', componentName, actionName, actionParam)
      }
    }
  },
  // computed: {
  //   grid1Listeners: function () {
  //     var vm = this
  //     // `Object.assign` объединяет объекты вместе, чтобы получить новый объект
  //     return Object.assign({},
  //       // this.$listeners,
  //       {
  //         input: function (event) {
  //           vm.$emit('input', event.target.value)
  //         }
  //       }
  //     )
  //   }
  // },
  components: { BrowserTabs, Browser, DataSource, Grid, Editor1 },
  mounted () {
    this.init()
  }

}
</script>
