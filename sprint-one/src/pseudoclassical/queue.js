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
    var item = this.storage[this.front];
    delete this.storage[this.front++];
    return item;
  }
};
Queue.prototype.size = function() {
  return this.back - this.front;
};
