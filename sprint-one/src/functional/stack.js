var Stack = function() {
  var instance = {};

  var storage = {};

  instance.top = 0;

  instance.push = function(value) {
    storage[instance.top++] = value;
  };

  instance.pop = function() {
    if (instance.size() > 0) {
      var item = storage[--instance.top];
      delete storage[instance.top];
      return item;
    }
  };

  instance.size = function() {
    return instance.top;
  };

  return instance;
};
