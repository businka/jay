import Vue from 'vue'

Vue.component(
  'DocEmissionIC',
  () => import('./components/WS3Browser/form/DocEmissionIC/DocEmissionIC')
)
Vue.component(
  'DocEdi',
  () => import('./components/WS3Browser/form/DocEdi/DocEdi')
)
Vue.component(
  'Browser',
  () => import('./components/WS3Browser/templates/Browser/Browser')
)
Vue.component(
  'NomenclatureItem',
  () => import('./components/WS3Browser/form/NomenclatureItem/NomenclatureItem')
)
Vue.component(
  'ToolBar',
  () => import('./components/WS3Browser/components/ToolBar')
)
