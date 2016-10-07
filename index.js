var method = kcats.prototype;

function kcats(max_len, num_stacks) {
    if(num_stacks > max_len) {
        // Raise exception if number of stacks is more than the size of the stack itself.
        throw new Error('Number of stacks should be lesser than maximum stack size');
    }
    
    this._max_len = max_len;
    this._num_stacks = num_stacks || 1;
    this._top = new Array(this._num_stacks);
    this._k = new Array(this._max_len);
    this._alloc = this._max_len / this._num_stacks;

    for (var i = 0; i < this._max_len; i++) {
        this._top[i] = this._alloc * i - 1;
    }
}

method._isEmpty = function(top_index) {
    return this._top[top_index] === this._alloc * top_index - 1;
};

method._reset = function(top_index) {
    this._top[top_index] = this._alloc * top_index -1;
};

method._isFull = function(top_index) {
    return this._top[top_index] === this._max_len - 1;
};

method._push = function(x, top_index) {
    if (this._top[top_index] < this._max_len - 1) {
	    this._k[++this._top[top_index]] = x;
    } else {
	    console.log('Stack overflow, element not added.');
    }
};

method._pop = function(top_index) {
    if (this._top[top_index] !== this._alloc * top_index - 1) {
	    return this._k[this._top[top_index]--];
    }

    return 'Stack is empty';
};

method._peek = function(top_index) {
    if (this._top[top_index] !== this._alloc * top_index - 1) {
	    return this._k[this._top[top_index]];
    }

    return 'Stack is empty';
};

module.exports = kcats;
