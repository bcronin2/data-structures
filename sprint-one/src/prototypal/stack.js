var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.top = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    return this.storage[this.top++] = value;
  },
  pop: function(value) {
    if (this.size() > 0) {
      var item = this.storage[--this.top];
      delete this.storage[this.top];
      return item;
    }
  },
  size: function() {
    return this.top;
  }
};
