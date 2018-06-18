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
      var item = this.storage[--this.top];
      delete this.storage[this.top];
      return item;
    }
  }

  size() {
    return this.top;
  }

}
