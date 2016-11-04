var path = require('path')

var createPattern = function (path) {
  return {pattern: path, included: true, served: true, watched: false}
}

var initShared = function (files, mochaConfig) {
  files.unshift(createPattern(path.join(__dirname, 'lib', 'karma-shared')))
}

module.exports = {
  'framework:shared': ['factory', initShared]
};
