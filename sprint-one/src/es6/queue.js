class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.storage[this.back++] = value;
  }

  dequeue() {
    if (this.size() > 0) {
      var item = this.storage[this.front];
      delete this.storage[this.front++];
      return item;
    }
  }

  size() {
    return this.back - this.front;
  }

}
