var match = require('minimatch')
var evaluate = require('./eval')

module.exports = function (files, filters, data, done) {

  console.log("filters start!!!!", filters)
  // if (!filters) {
  //   return done()
  // }

  console.log("filters enter!!!!")
  return done()
  
  var fileNames = Object.keys(files)
  Object.keys(filters).forEach(function (glob) {
    fileNames.forEach(function (file) {
      if (match(file, glob, { dot: true })) {
        var condition = filters[glob]
        if (!evaluate(condition, data)) {
          delete files[file]
        }
      }
    })
  })
  console.log("filters over!!!!")
  done()
}
