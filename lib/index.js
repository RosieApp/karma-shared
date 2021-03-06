var path = require('path');

var createPattern = function (path) {
  return {pattern: path, included: true, served: true, watched: false};
}

var initShared = function (files) {
  return files.unshift(createPattern(path.join(__dirname, 'karma-shared.js')));
}

initShared.$inject = ['config.files']

module.exports = {
  'framework:shared': ['factory', initShared]
};
