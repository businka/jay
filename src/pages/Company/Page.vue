<template>
  <q-page>
    <EditPanel
      :view="current"
      :name="name"
      @deactivate="deactivate"
    />
    <ToolBar
      :title="`${this.$route.name}`"
    />
    <DataGrid
      :name="name"
      @activate="activate"
    />
  </q-page>
</template>
<script>
// import { mapState } from 'vuex'
import ToolBar from '../components/ToolBar'
import DataGrid from '../components/DataGrid'
import EditPanel from '../components/DriverJsonEditorPanel'
const defaultData = {
  current: {
    item: {},
    loading: false,
    visible: false,
    change: false
  }
}
const getDefaultData = () => {
  return {
    source: Object.assign({}, defaultData.source),
    current: Object.assign({}, defaultData.current)
  }
}
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  form: getDefaultData,
  // watch: {
  //   'name' (val) {
  //     // this.source = getDefaultData()
  //   }
  // },
  methods: {
    // initForm: function () {
    //   // this.source = getDefaultData()
    // },
    activate: function (item) {
      console.log('activate ' + item.id)
      this.current = {
        item: item,
        visible: true
      }
    },
    deactivate: function () {
      this.current.visible = false
    }
  },
  computed: {
    // actions: function (){
    //   const self = this
    //   return {
    //     activate: function (item) {
    //       console.log('actions activate item', item)
    //     }
    //   }
    // }
  },
  components: {
    EditPanel,
    ToolBar,
    DataGrid
  },
  created () {
    // this.fetch()
  }
}
</script>
