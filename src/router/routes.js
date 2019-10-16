const routes = [
  {
    path: '/',
    component: () => import('../core/layouts/Index.vue'),
    children: [
      {
        path: '/Browser/:objType/:objName/Form/:objForm',
        component: () => import('../components/WS3Browser/templates/Browser/Browser'),
        props: (route) => ({ name: route.query.name })
      },
      {
        path: '/TabsBrowser/:objType/:objName/Form/:objForm',
        component: () => import('../components/WS3Browser/templates/TabsBrowser/TabsBrowser'),
        props: (route) => ({ name: route.query.name })
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
