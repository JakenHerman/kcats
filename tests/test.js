var assert = require('assert');
var kcats = require('../index.js');

describe('kcats', function() {
  describe('#._isEmpty()', function() {
    it('Determines whether or not the stack contains anything.', function() {
      var tests = new kcats(10);
      var result1 = tests._isEmpty();        
      assert.equal(result1, true);
      tests._push(1);
      var result2 = tests._isEmpty();
      assert.equal(result2, false);
      tests._reset();
      var result3 = tests._isEmpty();
      assert.equal(result3, true);
    });
  });
  
  describe('#._reset()', function(){
      it('Allows you to instantaneously pop all elements, without printing them.', function () {
          var tests = new kcats(10);
          tests._push(1);
          tests._push(2);
          tests._push(3);
          var isEmptyFalse = tests._isEmpty();
          assert.equal(isEmptyFalse, false);
          tests._reset(); //main reason for test
          var isEmptyTrue = tests._isEmpty();
          assert.equal(isEmptyTrue, true);
      });
  });

  describe('#._isFull()', function() {
      it('Determines whether or not the stack is full.', function() {
          var tests = new kcats(10);
          for(var i = 0; i < 11; i++){
              tests._push(i);
          }
          var isFull = tests._isFull();
          assert.equal(isFull, true);
          tests._reset();
          var isNotFull = tests._isFull();
          assert.equal(isNotFull, false);
      });
  });

  describe('#._push()', function() {
      it('Allows you to add an item to the stack.', function(){
          var tests = new kcats(3);
          tests._push(1);
          var isCorrectValue = tests._peek(); // should be 1
          assert.equal(isCorrectValue, 1);
          tests._push(2);
          var isCorrectValue = tests._peek(); // should be 2
          assert.equal(isCorrectValue, 2);
      });
  });

  describe('#._pop()', function() {
      it('Allows you to retrieve the element at the top of the stack.', function() {
          var tests = new kcats(3);
          tests._push(6);
          tests._push(42);
          var is42 = tests._pop();
          var is6 = tests._pop();
          assert.equal(is42, 42);
          assert.equal(is6, 6);
      });
  });

  describe('#._peek()', function() {
      it('Allows you to print the element at the top of the stack without removing it.',
      function(){
          var tests = new kcats(3);
          tests._push(453);
          tests._push(652);
          var is_652_peek = tests._peek();
          var is_652_pop = tests._pop();
          assert.equal(is_652_peek, is_652_pop);
          var is_453_peek = tests._peek();
          var is_453_pop = tests._peek();
          assert.equal(is_453_peek, is_453_pop);
      })
  })

});

