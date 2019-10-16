let navData = [
  {
    section: 'Business',
    icon: 'mdi-briefcase-outline',
    objType: '',
    objName: 'Business',
    template: '',
    objForm: '',
    path: '',
    props: '',
    child: [
      {
        path: '/Browser/Catalog/Nomenclature/Form/List',
        objType: 'Catalog',
        objName: 'Nomenclature',
        objForm: 'List',
        template: 'Browser',
        props: ''
      }
    ]
  },
  {
    section: 'Marking',
    icon: 'mdi-qrcode',
    objType: '',
    objName: 'Marking',
    template: 'TabsBrowser',
    objForm: 'Index',
    path: '/TabsBrowser/Document/Disk/Form/Index',
    props: '',
    child: [
      {
        path: '/TabsBrowser/Document/EmissionIC/Form/Index',
        objType: 'Document',
        objName: 'EmissionIC',
        objForm: 'Index',
        template: 'TabsBrowser',
        props: ''
      }
    ]
  },
  {
    section: 'Documents',
    icon: 'mdi-file-document-outline',
    objType: 'Catalog',
    objName: 'Disk',
    template: 'TabsBrowser',
    objForm: 'Index',
    path: '/TabsBrowser/Document/Disk/Form/Index',
    props: '',
    child: [
      {
        path: '/Browser/Document/Incoming/Form/List',
        objType: 'Document',
        objName: 'Incoming',
        objForm: 'List',
        template: 'Browser',
        props: ''
      },
      {
        path: '/TabsBrowser/Document/Outgoing/Form/Index',
        objType: 'Document',
        objName: 'Outgoing',
        objForm: 'Index',
        template: 'TabsBrowser',
        props: '',
        default: true
      }
    ]
  },
  {
    section: 'Tasks',
    icon: 'mdi-calendar-check',
    objType: 'Document',
    objName: 'OnMe',
    objForm: 'Index',
    template: 'TabsBrowser',
    props: '',
    child: [
      {
        objType: 'Document',
        objName: 'FromMe',
        template: '',
        props: ''
      },
      {
        objType: 'Document',
        objName: 'Unallocated',
        template: '',
        props: ''
      }
    ]
  }
]
let data = Object.assign(
  {},
  require('./document'),
  require('./nomenclature-data')
)

module.exports = function (app, server) {
  app.get('/api/Core/NavDrawer', function (req, res) {
    let result = { items: navData, index: {} }
    navData.forEach((item, i) => {
      if (item.path) {
        result.index[item.path] = i
      }
      if (item.child && item.child.length) {
        item.child.forEach((child) => {
          if (child.path) {
            result.index[child.path] = i
          }
        })
      }
    })
    res.json(result)
  })
  app.get('/form/:objType/:objName/:objForm', function (req, res) {
    if (!data.hasOwnProperty(req.params.objType)) {
      res.status(400).send(`not supported objType - ${req.params.objType}`)
      return
    }
    if (!data[req.params.objType].hasOwnProperty(req.params.objName)) {
      res.status(400).send(`not supported objName - ${req.params.objType}.${req.params.objName}`)
      return
    }
    if (!data[req.params.objType][req.params.objName].Form.hasOwnProperty(req.params.objForm)) {
      res.status(400).send(`not supported objForm - ${req.params.objType}.${req.params.objName}.${req.params.objForm}`)
      return
    }
    res.json(data[req.params.objType][req.params.objName].Form[req.params.objForm].templateParam)
  })
  app.get('/api/:objType/:objName/query', function (req, res) {
    res.json(data[req.params.objType][req.params.objName].Data)
  })
  app.get('/api/:objType/:objName', function (req, res) {
    res.json(data[req.params.objType][req.params.objName].Data[0])
  })
}
