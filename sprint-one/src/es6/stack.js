class Stack {
  constructor() {
  	this.storage = {};
  	this.top = 0;
  }

  push(value) {
  	this.storage[this.top++] = value;
  }

  pop() {
  	if (this.size() > 0) {
  		return this.storage[--this.top];
  	}
  }

  size() {
  	return this.top;
  }

}