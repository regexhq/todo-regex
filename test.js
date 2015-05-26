/*!
 * todo-regex <https://github.com/regexps/todo-regex>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var regex = require('./');

function todos(str) {
  var m = str.match(regex());
  if (!m) return;
  return (m[1] || m[2]).trim();
}

describe('regex', function () {
  it('should match todos in line comments:', function () {
    assert.equal(todos('// todo: abc'), 'abc', true);
    assert.equal(todos('// @todo: abc'), 'abc', true);
    assert.equal(todos('// todo abc xyz'), 'abc xyz', true);
    assert.equal(todos('// @todo abc xyz'), 'abc xyz', true);
  });

  it('should match todos in block comments:', function () {
    assert.equal(todos('/*\n * @todo one two\n */'), 'one two', true);
    assert.equal(todos('/*\n * @todo: abc xyz\n */'), 'abc xyz', true);
    assert.equal(todos('/*\n * todo: abc xyz\n */'), 'abc xyz', true);
  });

  it('should match todos in html comments:', function () {
    assert.equal(todos('<!-- todo: foo bar baz -->'), 'foo bar baz', true);
    assert.equal(todos('<!-- todo a b c d -->'), 'a b c d', true);
    assert.equal(todos('<!-- @todo a b c d -->'), 'a b c d', true);
  });
});
