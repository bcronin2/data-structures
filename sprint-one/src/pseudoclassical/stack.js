var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top++] = value;
};
Stack.prototype.pop = function() {
  if (this.size() > 0) {
    var item = this.storage[--this.top];
    delete this.storage[this.top];
    return item;
  }
};
Stack.prototype.size = function() {
  return this.top;
};
