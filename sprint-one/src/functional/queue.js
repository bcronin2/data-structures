var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.first = 0;
  someInstance.last = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[someInstance.last] = value;
    someInstance.last++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var value = storage[someInstance.first];
      someInstance.first++;
      return value;
    }
  };

  someInstance.size = function() {
    return  Math.max(0, someInstance.last - someInstance.first);
  };

  return someInstance;
};
