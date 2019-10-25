<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="q-p0-m0" v-if="data">
    <q-table
      square
      flat
      dense
      hide-header
      :columns="params.columns"
      :data="rows"
    >
      <template v-slot:body="props">
        <!--@click.native="emitAction({ name: 'RowActivate', data: {row: props.row }} )"-->
        <q-tr
          :props="props"
        >
          <q-popup-edit
            :value="jsonClone(props)"
            @save="updateRow"
          >
            <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
              <component
                v-bind:is="'Test'"
                :initialValue="initialValue"
                :value="value"
                :emitValue="emitValue"
                :validate="validate"
                :set="set"
                :cancel="cancel"
              >
              </component>
            </template>
          </q-popup-edit>
          <q-td
            v-for="(col, i) in props.cols"
            :key="i"
            :style="`text-align:${(col.align || 'left')}; vertical-align:${(col.vAlign || 'top')}`"
          >
            <component
              v-bind:is="col.template||'Default'"
              :col="col"
              :props="props"
            ></component>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import BaseTemplateMixin from '../../mixinTemplate/baseForm'
import { jsonClone } from '../../../../core/clone'

export default {
  name: 'DataGrid',
  computed: {
    rows () {
      return this.data.rows
    }
  },
  methods: {
    jsonClone,
    updateRow (data, data2) {
      this.dispatchAction('update', { store: this.store, params: this.params, data })
    },
    async init () {
      this.initStore()
      await this.initForm()
      await this.$store.dispatch(`${this.namespace}/query`, {
        store: this.store,
        params: this.params
      }, { root: true })
    }
  },
  mixins: [BaseTemplateMixin],
  components: {
    'Default': () => import('../../components/Cells/Default'),
    'DocMemberAttachment': () => import('../../components/Cells/DocMemberAttachment'),
    'DateTime': () => import('../../components/Cells/DateTime'),
    'Test': () => import('./test')
  },
  mounted () {
    console.log(`mounted ${this.$options.name} +  ${this.storeParams.uid}`)
    this.init()
  }
}
</script>
