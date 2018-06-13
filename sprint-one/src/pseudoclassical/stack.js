var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top++] = value;
};
Stack.prototype.pop = function() {
  if (this.size() > 0) {
    return this.storage[--this.top];
  }
};
Stack.prototype.size = function() {
  return this.top;
};
