var Queue = function() {
  var someInstance = {};

  var storage = {};

  someInstance.front = 0;
  someInstance.back = 0;

  someInstance.enqueue = function(value) {
    storage[someInstance.back] = value;
    someInstance.back++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var value = storage[someInstance.front];
      someInstance.front++;
      return value;
    }
  };

  someInstance.size = function() {
    return  Math.max(0, someInstance.back - someInstance.front);
  };

  return someInstance;
};
