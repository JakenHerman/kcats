'use strict';
var kcats = function (maxLen, numStacks) {
  numStacks = numStacks || 1;
  maxLen = maxLen || 0;
  if (numStacks > maxLen) {
    // Raise exception if number of stacks is more than the size of the stack itself.
    throw new Error('Number of stacks should be lesser than maximum stack size');
  }
  this.maxLen = maxLen;
  this.numStacks = numStacks;
  this._top = new Array(this.numStacks);
  this._k = new Array(this.maxLen);
  this._alloc = this.maxLen / this.numStacks;

  for (var i = 0; i < this.maxLen; i++) {
    this._top[i] = this._alloc * i - 1;
  }
};
var method = kcats.prototype;

method._isEmpty = function(topIndex) {
  return this._top[topIndex] === this._alloc * topIndex - 1;
};

method._reset = function(topIndex) {
  this._top[topIndex] = this._alloc * topIndex - 1;
};

method._isFull = function(topIndex) {
  return this._top[topIndex] === this._maxLen - 1;
};

method._push = function(x, topIndex) {
  if (this._top[topIndex] < this._maxLen - 1) {
    this._k[++this._top[topIndex]] = x;

    return '';
  }

  return 'Stack overflow, element not added.';
};

method._pop = function(topIndex) {
  if (this._top[topIndex] !== this._alloc * topIndex - 1) {
    return this._k[this._top[topIndex]--];
  }

  return 'Stack is empty.';
};

method._peek = function(topIndex) {
  if (this._top[topIndex] !== this._alloc * topIndex - 1) {
    return this._k[this._top[topIndex]];
  }

  return 'Stack is empty.';
};

module.exports = kcats;
