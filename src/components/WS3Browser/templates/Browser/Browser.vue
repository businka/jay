<template>
  <div if="form">
    <div class="row">
      <ToolBar v-if="toolBarVisible"
               :storeParams="{
                  name: 'toolBar',
                  parentNamespace: store.namespace,
                  parentKey: store.key,
                  parentState: true,
               }"
               class="jay-bordered"
      ></ToolBar>
    </div>
    <div class="row">
      <MassOperationsBar
        :storeParams="{
                  name: 'massOperationsBar',
                  parentNamespace: store.namespace,
                  parentKey: store.key,
                  parentState: true,
               }"
        class="jay-bordered"
      ></MassOperationsBar>
    </div>
    <div class="row">
      <FilterBar
        :storeParams="{
                  name: 'Content',
                  parentNamespace: store.namespace,
                  parentKey: store.key,
                  parentState: true,
               }"
      ></FilterBar>
    </div>
    <component
      v-if="form.dataSource"
      v-bind:is="form.dataSource.template"
      name="Content"
      :storeParams="{
                  parentNamespace: store.namespace,
                  objType: store.objType,
                  objName: store.objName,
                  parentKey: store.key,
                  parentState: false,
               }"
      :params=form.dataSource
    >
    </component>
    <component
      v-if="form.record"
      v-bind:is="form.record.template"
      name="EditForm"
      :storeParams="{
                  parentNamespace: store.namespace,
                  parentKey: store.key,
                  objType: form.record.objType,
                  objName: form.record.objName,
                  objForm: form.record.objForm,
                  mode: store.mode,
                  parentState: false,
               }"
      :visible="form.record.visible"
    >
    </component>
  </div>
</template>

<style lang="stylus">
  .jay-bordered {
    border-bottom: 1px solid $grey-3
  }
  .jay-toolbar {
    min-height: 36px;
  }
</style>

<script>
import BaseTemplateMixin from '../../mixin/baseForm'
import TemplateMixin from '../../mixin/form'

export default {
  name: 'Browser',
  props: {
    name: {
      type: String,
      default: 'TabsBrowser'
    },
    namespace: {
      type: String,
      default: 'TabsBrowser'
    }
  },
  form: () => ({}),
  computed: {
    toolBarVisible: {
      get: function () {
        try {
          return (this.params.toolBar.visible)
        } catch (e) {
          try {
            return (this.form.toolBar.visible)
          } catch (e) {
            return false
          }
        }
      }
    }
  },
  methods: {},
  mixins: [BaseTemplateMixin, TemplateMixin],
  components: {
    'ToolBar': () => import('../../components/ToolBar'),
    'MassOperationsBar': () => import('../../components/MassOperationsBar'),
    'FilterBar': () => import('../../components/FilterBar'),
    'DataGrid': () => import('../DataGrid/DataGrid'),
    'TreeDataGrid': () => import('../TreeDataGrid/TreeDataGrid')
    // 'DocEdi': () => import('../../form/DocEdi/DocEdi')
    // 'DocEmissionIC': () => import('../../form/DocEmissionIC/DocEmissionIC')
  },
  mounted () {
    this.init()
  }
}
</script>
