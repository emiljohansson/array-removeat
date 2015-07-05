"use strict";

var test = require('tape');
var removeAt = require('./');

test('exist', function(t) {
    t.equal(typeof removeAt, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(removeAt(), undefined);
    t.equal(removeAt(null), undefined);
    t.equal(removeAt({}), undefined);
    t.equal(removeAt({
        style: {}
    }), undefined);
    t.end();
});

test('remove a number', function(t) {
    t.deepEqual(removeAt([], 1), []);
    t.deepEqual(removeAt([3], -1), []);
    t.deepEqual(removeAt([3, 2], 0), [2]);
    t.deepEqual(removeAt([3, 2], 1), [3]);
    t.deepEqual(removeAt([1, 2, 3], 1), [1, 3]);
    t.end();
});

test('remove a string', function(t) {
    t.deepEqual(removeAt(["a", "b", "c"], 1), ["a", "c"]);
    t.end();
});

test('remove an object', function(t) {
    t.deepEqual(removeAt([{a:1}, {b:2}, {c:3}], 1), [{a:1},{c:3}]);
    t.end();
});
