<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="q-p0-m0" v-if="form">
    <q-table
      square
      flat
      dense
      hide-header
      :columns="form.columns"
      :data="form.rows"
    >
      <template v-slot:body="props">
        <q-tr
          @click.native="dispatchAction(store.parentNamespace, 'rowActivate', {
          key: store.parentKey,
          store,
          params: props.row } )"
          :props="props"
        >
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :style="`text-align:${(col.align || 'left')}; vertical-align:${(col.vAlign || 'top')}`"
          >
            <component
              v-bind:is="col.template||'Default'"
              :col="col"
              :props="props"
              :data="form.rows"
            ></component>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import BaseTemplateMixin from '../../mixin/baseForm'
import TemplateMixin from '../../mixin/form'

export default {
  name: 'DataGrid',
  props: {},
  methods: {
    async init () {
      this.initStore()
      await this.initForm()
      await this.$store.dispatch(`${this.store.namespace}/query`, {
        store: this.store,
        params: this.form
      }, { root: true })
    }
  },
  mixins: [BaseTemplateMixin, TemplateMixin],
  components: {
    'Default': () => import('../../components/Cells/Default'),
    'DocMemberAttachment': () => import('../../components/Cells/DocMemberAttachment'),
    'DateTime': () => import('../../components/Cells/DateTime')
  },
  mounted () {
    this.init()
  }
}
</script>
