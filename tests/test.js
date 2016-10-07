var assert = require('assert');
var kcats = require('../index.js');
  
describe('kcats', function() {

  describe('#._isEmpty()', function() {
    it('Determines whether or not the stack contains anything.', function() {
      var tests = new kcats(10, 1);
      var result1 = tests._isEmpty(0);        
      assert.equal(result1, true);
      tests._push("hello", 0);
      var result2 = tests._isEmpty(0);
      assert.equal(result2, false);
      tests._reset(0);
      var result3 = tests._isEmpty(0);
      assert.equal(result3, true);
    });
  });

  describe('#._reset()', function(){
      it('Allows you to instantaneously pop all elements, without printing them.', function () {
          var tests = new kcats(10);
          tests._push("mocha", 0);
          tests._push("test", 0);
          tests._push("stack", 0);
          var isEmptyFalse = tests._isEmpty(0);
          assert.equal(isEmptyFalse, false);
          tests._reset(0); //main reason for test
          var isEmptyTrue = tests._isEmpty(0);
          assert.equal(isEmptyTrue, true);
      });
  });



  describe('#._isFull()', function() {
      it('Determines whether or not the stack is full.', function() {
          var tests = new kcats(10);
          for(var i = 0; i < 11; i++){
              tests._push(i, 0);
          }
          var isFull = tests._isFull(0);
          assert.equal(isFull, true);
          tests._reset(0);
          var isNotFull = tests._isFull(0);
          assert.equal(isNotFull, false);
      });
  });

  describe('#._push()', function() {
      it('Allows you to add an item to the stack.', function(){
          var tests = new kcats(3, 2);
          tests._push(1, 0);
          var isCorrectValue = tests._peek(0); // should be 1
          assert.equal(isCorrectValue, 1);
          tests._push(2, 1);
          var isCorrectValue = tests._peek(1); // should be 2
          assert.equal(isCorrectValue, 2);
      });
  });

  describe('#._pop()', function() {
      it('Allows you to retrieve the element at the top of the stack.', function() {
          var tests = new kcats(3);
          tests._push(6, 0);
          tests._push(42, 0);
          var is42 = tests._pop(0);
          var is6 = tests._pop(0);
          assert.equal(is42, 42);
          assert.equal(is6, 6);
      });
  });

  describe('#._peek()', function() {
      it('Allows you to print the element at the top of the stack without removing it.',
      function(){
          var tests = new kcats(3);
          tests._push(453, 0);
          tests._push(652, 0);
          var is_652_peek = tests._peek(0);
          var is_652_pop = tests._pop(0);
          assert.equal(is_652_peek, is_652_pop);
          var is_453_peek = tests._peek(0);
          var is_453_pop = tests._peek(0);
          assert.equal(is_453_peek, is_453_pop);
      });
  });
});

