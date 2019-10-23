let navData = [
  {
    section: 'Business',
    icon: 'mdi-briefcase-outline',
    title: 'Business',
    path: '',
    props: '',
    child: [
      {
        path: '/Catalog/Nomenclature/List',
        title: 'Nomenclature',
        props: ''
      }
    ]
  },
  {
    section: 'Marking',
    icon: 'mdi-qrcode',
    title: 'Marking',
    path: '/TabsBrowser/Document/Disk/Form/Index',
    props: '',
    child: [
      {
        path: '/TabsBrowser/Document/EmissionIC/Form/Index',
        title: 'EmissionIC',
        props: ''
      }
    ]
  },
  {
    section: 'Documents',
    icon: 'mdi-file-document-outline',
    title: 'Disk',
    path: '/TabsBrowser/Document/Disk/Form/Index',
    props: '',
    child: [
      {
        path: '/Browser/Document/Incoming/Form/List',
        title: 'Incoming',
        props: ''
      },
      {
        path: '/TabsBrowser/Document/Outgoing/Form/Index',
        title: 'Outgoing',
        props: '',
        default: true
      }
    ]
  },
  {
    section: 'Tasks',
    icon: 'mdi-calendar-check',
    title: 'OnMe',
    props: '',
    child: [
      {
        title: 'FromMe',
        props: ''
      },
      {
        title: 'Unallocated',
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
    let _res = Object.assign(data[req.params.objType][req.params.objName].Form[req.params.objForm], req.params)
    res.json(_res)
  })
  app.get('/api/:objType/:objName/query', function (req, res) {
    res.json(data[req.params.objType][req.params.objName].Data)
  })
  app.get('/api/:objType/:objName', function (req, res) {
    let result = {}
    let id = req.query.id
    if (!id) {
      res.json(result)
      return
    }
    let _data = data[req.params.objType][req.params.objName].Data
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].id === id) {
        res.json(_data[i])
        return
      }
    }
    res.json(result)
  })
}
