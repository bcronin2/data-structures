var Queue = function() {
  var thisInstance = Object.create(queueMethods);
  thisInstance.storage = {};
  thisInstance.front = 0;
  thisInstance.back = 0;
  return thisInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
  },
  dequeue: function() {
    if (this.size() > 0) {
      return this.storage[this.front++];
    }
  },
  size: function() {
    return this.back - this.front;
  }
};
