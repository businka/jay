<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="q-p0-m0" v-if="data">
    <q-table
      square
      flat
      dense
      hide-header
      :columns="params.columns"
      :data="data.rows"
    >
      <template v-slot:body="props">
        <q-tr
          @click.native="emitAction({ name: 'RowActivate', data: {row: props.row }} )"
          :props="props"
        >
          <q-td
            key="expand1"
            auto-width
          >
            <q-btn
              dense
              size="xs"
              flat
              v-if="props.row.hasOwnProperty('child')"
              :loading="props.row.child === null && props.expand"
              :icon="props.expand ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click.stop="expand(props)"
            >
            </q-btn>
          </q-td>
          <q-td
            key="title"
          >
            {{props.row.title}}
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :style="`text-align:${(col.align || 'left')}; vertical-align:${(col.vAlign || 'top')}`"
          >
            <component
              v-bind:is="col.template||'Default'"
              :col="col"
              :props="props"
              :data="data.rows"
            ></component>
          </q-td>
        </q-tr>
        <q-tr
          v-show="props.expand"
          :props="props"
          v-for="(item, index) in props.row.child"
          :key="`${props.row.__index}-${index}`"
          @click.native="emitAction({ name: 'RowActivate', data: {row: item }} )"
        >
          <q-td key="expand"></q-td>
          <q-td
            key="title"
          >
            <span v-if="props.row.title === item.title.substring(0, props.row.title.length)">
              <span class="text-secondary">{{props.row.title}}</span><span>{{item.title.substring(props.row.title.length)}}</span>
            </span>
            <span v-else>{{item.title}}</span>
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :style="`text-align:${(col.align || 'left')}; vertical-align:${(col.vAlign || 'top')}`"
          >
            <component
              v-bind:is="col.template||'Default'"
              :col="col"
              :props="{ row: item }"
              :data="data.rows"
            ></component>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import BaseTemplateMixin from '../../mixinTemplate/baseForm'
import TemplateMixin from '../../mixinTemplate/form'

export default {
  name: 'TreeDataGrid',
  props: {},
  methods: {
    async loadChild (props) {
      await this.$store.dispatch(`${this.namespace}/child`, {
        store: this.store,
        params: this.params,
        data: this.data,
        row: props.row
      }, { root: true })
    },
    expand (props) {
      props.expand = !props.expand
      if (this.data.rows[props.row.__index].child === null) {
        this.loadChild(props)
      }
    },
    async init () {
      this.initStore()
      await this.initForm()
      await this.$store.dispatch(`${this.namespace}/query`, {
        store: this.store,
        params: this.params,
        data: this.data
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
