var Queue = function() {
  var someInstance = {};

  var storage = {};

  someInstance.front = 0;
  someInstance.back = 0;

  someInstance.enqueue = function(value) {
    storage[someInstance.back++] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      return storage[someInstance.front++];
    }
  };

  someInstance.size = function() {
    return  Math.max(0, someInstance.back - someInstance.front);
  };

  return someInstance;
};
