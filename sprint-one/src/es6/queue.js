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
  		return this.storage[this.front++];
  	}
  }

  size() {
  	return this.back - this.front;
  }

}
