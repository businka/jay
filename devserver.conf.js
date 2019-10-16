const config = {
  // https: true,
  // port: 8080,
  open: true, // opens browser window automatically
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost'
  //   },
  //   '/ws/': {
  //     target: 'ws://localhost',
  //     changeOrigin: true,
  //     ws: true
  //   }
  // },
  before: function (app, server) {
    require('./dev_data/nomenclature')(app, server)
    require('./dev_data/core')(app, server)
    // require('./dev_data/document')(app, server)
  }
}

module.exports = config
