<template>
  <div v-if="data">
    <div class="row">
      <component
        v-if="params.components.toolBar"
        v-bind:is="params.components.toolBar.template"
        :storeParams="{
                  form:storeParams.form,
                  namespace: store.namespace,
                  uid: `${storeParams.form}`,
               }"
        class="jay-bordered"
        :params=params.components.toolBar
      ></component>
    </div>
    <div class="row">
      <component
        v-if="params.components.massOperationsBar"
        v-bind:is="params.components.massOperationsBar.template"
        :storeParams="{
                  form:storeParams.form,
                  namespace: store.namespace,
                  uid: `${storeParams.form}`,
               }"
        class="jay-bordered"
        :params=params.components.massOperationsBar
      ></component>
    </div>
    <div class="row">
      <component
        v-if="params.components.filterBar"
        v-bind:is="params.components.filterBar.template"
        :storeParams="{
                  form:storeParams.form,
                  namespace: store.namespace,
                  uid: `${storeParams.form}`,
               }"
        :params=params.components.filterBar
      ></component>
    </div>
    <component
      v-if="params.components.content"
      v-bind:is="params.components.content.template"
      @action="emitAction"
      :modeParams="modeParams"
      :storeParams="{
                  form:storeParams.form,
                  uid: `${storeParams.uid}`,
               }"
      :params=params.components.content
    >
    </component>
    <RightDrawerFormViewer
      name="editForm"
      v-if="data.editForm && data.editForm.visible"
      :params=data.editForm
      @action="emitAction"
    >
    </RightDrawerFormViewer>
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
import BaseTemplateMixin from '../../mixinTemplate/baseForm'
import TemplateMixin from '../../mixinTemplate/form'

export default {
  name: 'Browser',
  methods: {
    actionCloseForm (data) {
      this.$store.commit(`${this.store.namespace}/hideEditForm`, {
        uid: this.store.uid
      })
    },
    actionRowActivate (data) {
      if (!data.row) {
        console.error('rowActivate - "row" not found')
        return
      }
      this.$store.commit(`${this.store.namespace}/showEditForm`, {
        uid: this.store.uid,
        data: {
          form: data.row.form || this.params.editFormDefault,
          visible: true,
          item: data.row
        }
      })
    }
  },
  mixins: [BaseTemplateMixin, TemplateMixin],
  components: {
    'ToolBar': () => import('../../components/ToolBar'),
    'MassOperationsBar': () => import('../../components/MassOperationsBar'),
    'FilterBar': () => import('../../components/FilterBar'),
    'DataGrid': () => import('../DataGrid/DataGrid'),
    'TreeDataGrid': () => import('../TreeDataGrid/TreeDataGrid'),
    'RightDrawerFormViewer': () => import('../../form/RightDrawerFormViewer')
    // 'DocEdi': () => import('../../form/DocEdi/DocEdi')
    // 'DocEmissionIC': () => import('../../form/DocEmissionIC/DocEmissionIC')
  },
  mounted () {
    console.log(`mounted ${this.$options.name} +  ${this.storeParams.uid}`)
    this.init()
  }
}
</script>
