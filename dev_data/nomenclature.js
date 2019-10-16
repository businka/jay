let data = require('./nomenclature-data').Catalog.Nomenclature.Data

function isEmptyObject (obj) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false
    }
  }
  return true
}

module.exports = function (app, server) {
  app.get('/api/Catalog/Nomenclature/query', function (req, res) {
    let result = []
    let filter = req.query
    if (isEmptyObject(filter)) {
      filter = {
        parent: null
      }
    }
    let checkFilter
    data.forEach(function (item) {
      checkFilter = true
      if (filter) {
        for (let elem in filter) {
          if (!filter.hasOwnProperty(elem)) {
            continue
          }
          if (item[elem] !== filter[elem]) {
            checkFilter = false
            break
          }
        }
      }
      if (checkFilter) {
        result.push(item)
      }
    })
    res.json(result)
  })
}
