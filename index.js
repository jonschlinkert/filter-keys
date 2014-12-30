'use strict';

var mm = require('micromatch');

module.exports = function filterKeys(o, patterns) {
  if (o == null) {
    throw new Error('filter-keys expects an object');
  }

  var keys = Object.keys(o);
  if (!patterns) return keys;

  if (arguments.length === 1) {
    return keys;
  }

  return mm(keys, patterns);
};
