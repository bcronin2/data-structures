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
      var item = this.storage[--this.top];
      delete this.storage[this.top];
      return item;
    }
  },
  size: function() {
    return this.top;
  }
};
