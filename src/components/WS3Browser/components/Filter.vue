<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <q-btn flat :icon="icon">
      <q-menu
        cover
        anchor="top right"
      >
        <div class="q-pa-md">
          <q-toolbar>
            <q-toolbar-title>{{ $t('FilterSelected') }}</q-toolbar-title>
            <q-btn dense flat color="primary" :label="$t('FilterSelect')"></q-btn>
            <q-btn
              flat
              dense
              icon="close"
              v-close-popup
            ></q-btn>
          </q-toolbar>
          <div
            :key="filter.field"
            class="row no-wrap"
            v-for="filter in params.filterFields"
          >
            <q-input :label="filter.title" v-model="text" class="col-8" dense>
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
                <q-btn round dense flat icon="search" @click="openSelectBrowser"></q-btn>
              </template>
            </q-input>
          </div>
        </div>
        <component
          v-bind:is="selectTmpl"
          :source="source"
          @selectItem="onEvent"
          @cancelSelection="selectTmpl=''"
        ></component>
      </q-menu>
    </q-btn>
  </div>

</template>

<style lang="stylus">
</style>

<script>
import BaseTemplateMixin from '../mixinTemplate/baseForm'

export default {
  data: () => ({
    dialog: false,
    // filter: [],
    text: '',
    selectTmpl: ''
  }),
  methods: {
    openSelectBrowser () {
      this.selectTmpl = 'SelectionDrawer'
    },
    onEvent () {
    }
  },
  mixins: [BaseTemplateMixin],
  computed: {
    filter: {
      get: function () {
        return this.data ? this.data.filter : {}
      }
    },
    icon: function () {
      return this.filter ? 'mdi-filter' : 'mdi-filter-outline'
    }
  },
  components: {
    'SelectionDrawer': () => import('../templates/SelectionDrawer')
  }
}
</script>
