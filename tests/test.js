'use strict';
var assert = require('assert');
var kcats = require('../index.js');

describe('kcats', function() {

  it("should not be undefined when intialized", function() {
      var stack = new kcats(10);
      assert(stack,!undefined);
  });

  describe('#._isEmpty()', function() {
    it('Determines whether or not the stack contains anything.', function() {
      var stack = new kcats(10, 1);
      var result = stack._isEmpty(0);

      assert.equal(result, true);
      stack._push('hello', 0);

      result = stack._isEmpty(0);

      assert.equal(result, false);
      // main reason for test
      stack._reset(0);

      result = stack._isEmpty(0);

      assert.equal(result, true);
    });
  });

  describe('#._reset()', function() {
    it('Allows you to instantaneously pop all elements, without printing them.', function () {
      var stack = new kcats(10);

      stack._push('mocha', 0);
      stack._push('test', 0);
      stack._push('stack', 0);

      var isEmpty = stack._isEmpty(0);

      assert.equal(isEmpty, false);

      // main reason for test
      stack._reset(0);

      isEmpty = stack._isEmpty(0);

      assert.equal(isEmpty, true);
    });

    var testNumbers = [
      {blocks: 10, stacks: 2},
      {blocks: 100, stacks: 10},
      {blocks: 1000, stacks: 100}
    ];

    testNumbers.forEach(function(num) {
        it('correctly filled and resetted ' + num.stacks + ' stacks',
        function() {
          var stack = new kcats(num.blocks, num.stacks);

          for(var i=0; i < num.stacks; i++) {
              stack._push("fill", i);

              var isEmptyFalse = stack._isEmpty(i);
              assert.equal(isEmptyFalse, false);

              stack._reset(i);

              var isEmptyTrue = stack._isEmpty(i);
              assert.equal(isEmptyTrue, true);
          }
        });
    });
  });

  describe('#._isFull()', function() {
    it('Determines whether or not the stack is full.', function() {
      var stack = new kcats(10);
      var err = '';

      for (var i = 0; i < 11; i++) {
        err = stack._push(i, 0);
        // Check for stackover flow error
        if (i < 10) {
          assert.equal(err, '');
        } else {
          assert.equal(err, 'Stack overflow, element not added.');
        }
      }

      var isFull = stack._isFull(0);

      assert.equal(isFull, true);
      stack._reset(0);

      isFull = stack._isFull(0);
      assert.equal(isFull, false);
    });
  });

  describe('#._push()', function() {
    it('Allows you to add an item to the stack.', function() {
      var stack = new kcats(2, 2);
      var err = '';

      stack._push(1, 0);
      // should be 1
      var isCorrectValue = stack._peek(0);

      assert.equal(isCorrectValue, 1);

      // should be 2
      stack._push(2, 1);
      isCorrectValue = stack._peek(1);
      assert.equal(isCorrectValue, 2);

      // Check for full stack error
      stack._push(3, 0);
      err = stack._push(4, 1);
      assert.equal(err, 'Stack overflow, element not added.');
    });
  });

  describe('#._pop()', function() {
    it('Allows you to retrieve the element at the top of the stack.', function() {
      var stack = new kcats(3);

      stack._push(6, 0);
      stack._push(42, 0);

      var pop = stack._pop(0);

      assert.equal(pop, 42);

      pop = stack._pop(0);
      assert.equal(pop, 6);

      // Check for empty stack error
      pop = stack._pop(1);
      assert.equal(pop, 'Stack is empty.');
    });
  });

  describe('#._peek()', function() {
    it('Allows you to print the element at the top of the stack without removing it.',
    function() {
      var stack = new kcats(3);

      stack._push(453, 0);
      stack._push(652, 0);

      var peek = stack._peek(0);
      var pop = stack._pop(0);

      assert.equal(peek, pop);

      peek = stack._peek(0);
      pop = stack._peek(0);
      assert.equal(peek, pop);

      // Check for empty stack error
      peek = stack._peek(1);
      assert.equal(peek, 'Stack is empty.');
    });
  });

  describe('#._validStacksNumber()', function() {
    it('Ensures the number of stacks is lower than the total number of elements.',
    function() {
      var test, expectedErrorMessage;
      expectedErrorMessage = 'Number of stacks should be lesser than maximum stack size';
      test = function(len, stacks) {
        return new kcats(len, stacks);
      };
      assert.throws(test.bind(null, 1, 2), Error, expectedErrorMessage);
      assert.throws(test.bind(null, 0, 0), Error, expectedErrorMessage);
      assert.throws(test.bind(null), Error, expectedErrorMessage);
      assert.throws(test.bind(null, 0, null), Error, expectedErrorMessage);
    });
  });
});
