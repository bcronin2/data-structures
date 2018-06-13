var Stack = function() {
  var instance = {};
  instance.storage = {};
  instance.top = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top++] = value;
  },
  pop: function() {
    if (this.size() > 0) {
      return this.storage[--this.top];
    }
  },
  size: function() {
    return this.top;
  }
};
