var Stack = function() {
  var someInstance = {};

  var storage = {};

  someInstance.top = 0;

  someInstance.push = function(value) {
    storage[someInstance.top++] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size() > 0) {
      return storage[--someInstance.top];
    }
  };

  someInstance.size = function() {
    return someInstance.top;
  };

  return someInstance;
};
