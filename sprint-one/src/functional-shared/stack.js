var Stack = function() {
  var thisInstance = {};
  thisInstance.storage = {};
  thisInstance.top = 0;
  _.extend(thisInstance, stackMethods);
  return thisInstance;
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
