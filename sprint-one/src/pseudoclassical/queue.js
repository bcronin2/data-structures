var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back++] = value;
};
Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    return this.storage[this.front++];
  }
};
Queue.prototype.size = function() {
  return this.back - this.front;
};
