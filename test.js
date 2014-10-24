/*!
 * filter-keys <https://github.com/jonschlinkert/filter-keys>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var filterKeys = require('./');

describe('filterKeys', function () {
  it('should filter keys using the given glob patterns', function () {
    filterKeys({a: 'a', b: 'b', c: 'c'}, '*').should.eql(['a', 'b', 'c']);
    filterKeys({a: 'a', b: 'b', c: 'c'}, 'b').should.eql(['b']);
    filterKeys({a: 'a', b: 'b', c: 'c'}, '{b,c}').should.eql(['b', 'c']);
    filterKeys({foo: 'a', bar: 'b', baz: 'c'}, 'b*').should.eql(['bar', 'baz']);
  });

  it('should exclude keys that match negation patterns:', function () {
    filterKeys({a: 'a', b: 'b', c: 'c'}, ['*', '!b']).should.eql(['a', 'c']);
    filterKeys({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*']).should.eql(['foo']);
  });

  it('should return an array of keys if no pattern is given:', function () {
    filterKeys({a: 'a', b: 'b', c: 'c'}).should.eql(['a', 'b', 'c']);
  });

  it('should throw an error if an object is not passed:', function () {
    (function () {
      filterKeys()
    }).should.throw('filter-keys expects an object');
  });
});
