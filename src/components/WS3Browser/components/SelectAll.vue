<template>
  <div>
    <q-checkbox :value="marked" @click="onClick">
    </q-checkbox>
    <span class="clickable">{{ label }}
      <q-menu>
        <q-list>
          <q-item clickable v-close-popup @click="emitMarkAll">
            <q-item-section>{{$t('MarkAll')}}</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emitMarkRemove">
            <q-item-section>{{$t('MarkRemove')}}</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emitMarkInvert">
            <q-item-section>{{$t('MarkInvert')}}</q-item-section>
          </q-item>
          </q-list>
      </q-menu>
    </span>
  </div>
</template>

<style>
  .clickable:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<script>
export default {
  props: {
    all: {
      type: Number,
      default: 0
    },
    selected: {
      type: Number,
      default: 1
    }
  },
  data: () => ({}),
  computed: {
    marked: function () {
      if (this.selected > 0) {
        return true
      } else {
        return false
      }
    },
    label: function () {
      if (this.selected > 0) {
        if (this.selected === this.all) {
          return this.$t('Marked all')
        } else {
          return this.$t('Marked') + ` (${this.selected})`
        }
      } else {
        return this.$t('Mark')
      }
    }
  },
  methods: {
    onClick () {
      if (this.marked) {
        this.emitMarkRemove()
      } else {
        this.emitMarkAll()
      }
    },
    emitMarkAll () {
      this.$emit('MarkAll')
    },
    emitMarkRemove () {
      this.$emit('MarkRemove')
    },
    emitMarkInvert () {
      this.$emit('MarkInvert')
    }
  }
// components: { DataGrid, SearchForm, FilterButton },
// mount: {}
}
</script>
