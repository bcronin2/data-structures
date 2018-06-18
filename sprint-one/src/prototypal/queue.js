var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.front = 0;
  instance.back = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var item = this.storage[this.front];
      delete this.storage[this.front++];
      return item;
    }
  },
  size: function() {
    return this.back - this.front;
  }
};
