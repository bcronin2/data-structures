var Stack = function() {
  var thisInstance = Object.create(stackMethods);
  thisInstance.storage = {};
  thisInstance.top = 0;
  return thisInstance;
};

var stackMethods = {
  push: function(value) {
    return this.storage[this.top++] = value;
  },
  pop: function(value) {
    if (this.size() > 0) {
      return this.storage[--this.top];
    }
  },
  size: function() {
    return this.top;
  }
};
