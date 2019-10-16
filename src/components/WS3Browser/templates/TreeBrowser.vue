<template>
  <div>
    <div class="row">
      <slot name="panel">
        <q-toolbar class="bordered">
          <q-btn :label="'+ ' + $t(name) "/>
          <q-separator spaced vertical/>
          <q-btn flat dense :icon='massIcon' @click='massPanelVisible = !massPanelVisible'/>
        </q-toolbar>
      </slot>
    </div>
    <div class="row">
      <q-toolbar v-if="massPanelVisible" class="bg-grey-3">
        <slot name="massPanel">
          <SelectAll></SelectAll>
          <q-separator spaced vertical/>
          <q-btn
            v-for="item in source.actions"
            :key="item.id"
            :icon="item.icon"
            flat
            @click="$emit('massOper', item.id)"
          >
          </q-btn>
        </slot>
      </q-toolbar>
    </div>
    <div class="row">
      <q-toolbar class="bordered">
        <slot name="SearchForm">
          <SearchForm></SearchForm>
        </slot>
        <q-space/>
        <slot name="Filter">
          <FilterButton :filter1="filter"></FilterButton>
        </slot>
      </q-toolbar>
    </div>
    <slot name="content" :source="source">
      <DataGrid :source="source"></DataGrid>
    </slot>
  </div>
</template>

<style lang="stylus">
  .bordered {
    border-bottom: 1px solid $grey-3
  }
</style>

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    source: Object
  },
  form () {
    return {
      filter: {},
      massPanelVisible: false
    }
  },
  computed: {
    massIcon: function () {
      return this.massPanelVisible ? 'expand_less' : 'expand_more'
    }
  },
  methods: {},
  components: {
    'SearchForm': () => import('../components/SearchForm'),
    'FilterButton': () => import('../components/Filter'),
    'DataGrid': () => import('./DataGrid/DataGrid'),
    'SelectAll': () => import('../components/SelectAll')
  },
  mount: {}
}
</script>
