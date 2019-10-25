<template>
  <div class="q-pa-md" v-if="data.item">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        v-model="title"
        filled
        dense
        label="Name"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
      <q-input
        v-model="gtin"
        filled
        dense
        label="GTIN"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
    </q-form>
    <Browser
      :params="this.params.components.props"
      :modeParams="data.item"
      :storeParams="{
      form: this.store.uid,
      uid: `${this.store.uid}:props`
      }"
    >
    </Browser>
  </div>
</template>

<style>
</style>

<script>
import BaseTemplateMixin from '../../mixinTemplate/baseForm'
import TemplateMixin from '../../mixinTemplate/form'
import storage from './store'

export default {
  name: 'NomenclatureItem',
  // props: {},
  computed: {
    title: {
      get () {
        return this.getItemProps(['item', 'title'])
      },
      set (value) {
        return this.setItemProps(['item', 'title'], value)
      }
    },
    gtin: {
      get () {
        return this.getItemProps(['item', 'gtin'])
      },
      set (value) {
        return this.setItemProps(['item', 'gtin'], value)
      }
    }
  },
  methods: {
    init () {
      this.initStore()
      this.initForm()
      this.$store.dispatch(`${this.namespace}/read`, {
        store: this.store,
        params: this.params
      }, { root: true })
    },
    onClose () {
      this.$store.commit(`${this.store.parentNamespace}/hideEditForm`, { key: this.store.parentUid }, { root: true })
    },
    onSave () {
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },
    getItemProps (path) {
      if (!this.store.uid) {
        return null
      }
      return this.$store.getters[`${this.store.namespace}/getProp`](this.store.uid, path, null)
    },
    setItemProps (path, value) {
      this.$store.commit(`${this.store.namespace}/updateProp`, {
        uid: this.store.uid,
        path,
        value
      }, { root: true })
    }
  },
  mixins: [BaseTemplateMixin, TemplateMixin],
  mounted () {
    console.log(`mounted ${this.$options.name} +  ${this.storeParams.uid}`)
    this.init()
  },
  beforeMount () {
    if (!this.$store.state.hasOwnProperty(this.$options.name)) {
      this.$store.registerModule(this.$options.name, storage)
    }
  }
}
</script>
