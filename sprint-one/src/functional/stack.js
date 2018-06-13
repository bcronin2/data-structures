var Stack = function() {
  var someInstance = {};

  var storage = {};

  someInstance.top = 0;

  someInstance.push = function(value) {
    storage[someInstance.top] = value;
    someInstance.top++;
  };

  someInstance.pop = function() {
    if (someInstance.top > 0) {
      var value = storage[--someInstance.top];
      return value;
    }
  };

  someInstance.size = function() {
    return someInstance.top;
  };

  return someInstance;
};
