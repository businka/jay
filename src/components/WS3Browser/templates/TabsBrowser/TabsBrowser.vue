<template>
  <div class="q-p0-md" v-if="form && form.tabs">
    <q-toolbar
      class="jay-toolbar jay-bordered"
    >
      <q-tab-panels
        v-model="activeTab"
      >
        <slot name="toolbar">
          <q-tab-panel
            v-for="tab in form.tabs"
            :name="tab.id"
            :key="tab.id"
            class="not-padding"
          >
            <BrowserToolBar
              :storeParams="{
                parentNamespace: tab.template,
                parentUid: tab.storeParams ? tab.storeParams.uid: '',
                parentState: true,
              }"
            ></BrowserToolBar>
          </q-tab-panel>
        </slot>
      </q-tab-panels>
      <q-space></q-space>
      <q-tabs
        v-model="activeTab"
        dense
        indicator-color="accent"
      >
        <q-tab
          dense
          v-for="tab in form.tabs"
          :key="tab.id"
          :name="tab.id"
          :label="$t(`TabsBrowser.Tab.${tab.title}`)"
          no-caps
          class="jay-tab"
        >
        </q-tab>
      </q-tabs>

      <!--<q-separator></q-separator>-->
    </q-toolbar>
    <q-tab-panels v-model="activeTab">
      <slot name="content">
        <q-tab-panel
          v-for="tab in form.tabs"
          :key="tab.id"
          :name="tab.id"
          class="not-padding"
        >
          <component
            v-bind:is="tab.template"
            :key="tab.id"
            :params="tab.templateParams"
            :storeParams="tab.storeParams"
          ></component>
        </q-tab-panel>
      </slot>
    </q-tab-panels>

  </div>
</template>
<script>
import BaseTemplateMixin from '../../mixinTemplate/baseForm'
import TemplateMixin from '../../mixinTemplate/form'

export default {
  name: 'TabsBrowser',
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
  computed: {
    activeTab: {
      get: function () {
        return this.form ? this.form.active : ''
      },
      set: function (val) {
        this.$store.commit(`${this.store.namespace}/SetActiveTab`, { key: this.store.uid, form: val })
      }
    }
  },
  mounted () {
    this.init()
  },
  mixins: [BaseTemplateMixin, TemplateMixin],
  components: {
    'BrowserToolBar': () => import('../../components/ToolBar'),
    'Browser': () => import('../Browser/Browser'),
    'TreeBrowser': () => import('../TreeBrowser/Index')
  }
}

</script>

<style lang="scss">
  .border-bottom {
    padding: 0;
  }

  .jay-toolbar {
    min-height: 36px;
  }

  .not-padding {
    padding: 0;
  }

  .jay-bordered {
    border-bottom: 1px solid $grey-3;
  }

  .jay-tab {
    /*padding: 0 12px 0;*/
    /*font-size: 14px;*/
  }
</style>
