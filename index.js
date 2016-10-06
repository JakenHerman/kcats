var method = kcats.prototype;

function kcats(max_len){
    this._max_len = max_len;
    this._top = -1;
    this._k = new Array(this._max_len);
}

method._isEmpty = function(){
    return (this._top == -1);
};

method._reset = function(){
    this._top = -1;
};

method._isFull = function(){
    return (this._top == this._max_len - 1);
};

method._push = function(x){
    if(this._top < (this._max_len - 1)){
	this._k[++this._top] = x;
    }
    else {
	console.log("Stack overflow, element not added.");
    }
};

method._pop = function(){
    if(this._top != -1){
	return this._k[this._top--];
    }
    else {
	return "stack is empty";
    }
};

method._peek = function(){
    if(this._top == -1){
	return this._k[this._top];
    }
    else {
	return "stack is empty";
    }
};

module.exports = kcats;