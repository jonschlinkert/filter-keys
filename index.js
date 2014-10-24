'use strict';

var multimatch = require('multimatch');

module.exports = function filterKeys(o, patterns) {
  if (o == null) {
    throw new Error('filter-keys expects an object');
  }

  var keys = Object.keys(o);
  if (arguments.length === 1) {
    return keys;
  }

  return multimatch(keys, patterns);
};
