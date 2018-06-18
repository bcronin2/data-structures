var Queue = function() {
  var instance = {};

  var storage = {};

  instance.front = 0;
  instance.back = 0;

  instance.enqueue = function(value) {
    storage[instance.back++] = value;
  };

  instance.dequeue = function() {
    if (instance.size() > 0) {
      var item = storage[instance.front];
      delete storage[instance.front++];
      return item;
    }
  };

  instance.size = function() {
    return Math.max(0, instance.back - instance.front);
  };

  return instance;
};
