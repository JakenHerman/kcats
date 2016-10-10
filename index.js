'use strict';
var kcats = function (maxLen, numStacks) {
  this._maxLen = maxLen;
  this._numStacks = numStacks || 1;
  this._top = new Array(this._numStacks);
  this._k = new Array(this._maxLen);
  this._alloc = this._maxLen / this._numStacks;

  for (var i = 0; i < this._maxLen; i++) {
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
