<template>
  <q-drawer
    container
    v-model="visible"
    side="left"
    bordered
    :width="200"
    content-class="nav-drawer"
  >
    <q-toolbar>{{$t(`NavDrawer.Title`)}}</q-toolbar>
    <q-list v-if="items && current>=0">
      <q-item
        clickable
        v-ripple
        :key="items[current].path"
        :to="items[current].path"
        class="item-level-1"
        :active="items[current].path===activePath"
      >
        <q-item-section class="text-level-1 current-text-level-1">{{$t(`NavDrawer.${items[current].title}`)}}
        </q-item-section>
      </q-item>
      <q-item
        v-for="item in items[current].child"
        clickable
        dense
        v-ripple
        :key="item.path"
        :to="item.path"
        class="item-level-3"
        :active="item.path===activePath"
        active-class="active"
        exact-active-class="active"
      >
        <q-item-section class="text-level-3"
        >{{$t(`NavDrawer.${item.title}`)}}
        </q-item-section>
      </q-item>
    </q-list>
    <q-list v-if="items">
      <span
        v-for="(item, i) in items"
        :key="i"
      >
      <q-item
        v-if="i!==current && !item.child"
        clickable
        v-ripple
        :to="item.path"
      >
        <q-item-section
          avatar
        >
          <q-icon :name="item.icon"></q-icon>
        </q-item-section>
        <q-item-section>{{$t(`NavDrawer.${item.section}`)}}</q-item-section>
      </q-item>
      <q-item
        v-if="i!==current && item.child"
        clickable
        v-ripple
        class="item-level-1"
      >
        <q-item-section
          avatar
          class="icon-level-1"
        >
          <q-icon
            :name="item.icon"
            class="icon-level-1"
          ></q-icon>
        </q-item-section>
        <q-item-section class="text-level-1">{{$t(`NavDrawer.${item.title}`)}}</q-item-section>
        <q-menu
          anchor="top left"
          self="top left"
          auto-close
          class="submenu q-drawer--left.q-drawer--bordered"
          square
        >
          <q-list class="submenu">
            <q-item
              clickable
              v-ripple
              :key="item.path"
              :to="item.path"
              class="item-level-1"
            >
            <q-item-section
              avatar
              class="icon-level-1"
            >
              <q-icon
                dense
                :name="item.icon"
                class="icon-level-1"
              >
              </q-icon>
            </q-item-section>
              <q-item-section class="text-level-1">{{$t(`NavDrawer.${item.title}`)}}</q-item-section>
            </q-item>
            <q-item
              v-for="subitem in item.child"
              clickable
              dense
              v-ripple
              :key="subitem.path"
              :to="subitem.path"
              class="item-level-3"
            >
              <q-item-section class="text-level-3">{{$t(`NavDrawer.${subitem.title}`)}}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>

      </span>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  computed: {
    activePath: {
      get: function () {
        return this.$route.path
      }
    },
    items: {
      get: function () {
        return this.$store.state.NavDrawer.items
      }
    },
    current: {
      get: function () {
        let index = this.$store.state.NavDrawer.index[this.$route.path]
        if (index >= 0) {
          return index
        }
        return -1
      }
    },
    visible: {
      get: function () {
        return this.$store.state.NavDrawer.visible
      },
      set: function (val) {
        this.$store.commit('NavDrawerVisible', val)
      }
    }
  },
  mounted () {
    this.$store.dispatch('Load', { path: this.$route.path })
  }
}
</script>

<style lang="scss">
  .nav-drawer {
    background-color: $blue-grey-10;
    color: $blue-grey-1;
  }

  .submenu {
    width: 250px;
    color: $blue-grey-1;
    background-color: $blue-grey-9;
    box-shadow: none;
  }

  .item-level-1 {
    line-height: 45px;
    padding: 0;
    margin: 0;
    outline: 0;
    border-left: 3px solid $blue-grey-10;
  }

  .text-level-1 {
    line-height: 45px;
    font-size: 18px;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  .current-text-level-1 {
    margin-left: 9px;
  }

  .item-level-3 {
    line-height: 14px;
    padding: 0;
    margin: 0;
    outline: 0;
    border-left: 3px solid $blue-grey-10;
  }

  .text-level-3 {
    line-height: 14px;
    font-size: 15px;
    padding: 8px 0 6px 0;
    width: 146px;
    margin-left: 39px;
  }

  .icon-level-1 {
    width: 40px;
    padding-right: 0;
    min-width: 40px;
    height: 46px;
    font-size: 46px;
    line-height: 46px;
    text-align: center;
  }

  .q-item {
    &.q-router-link--active, &--active {
      border-left: 3px solid $deep-orange-10;
      background-color: $blue-grey-10;
      color: $blue-grey-1;
    }
  }
</style>
