class BinarySearchTree {
  
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
  
  // O(n) (worst-case, if tree is unbalanced)
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  
  // O(n) (worst-case, if tree is unbalanced)
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value && this.left) {
      return this.left.contains(value);
    }
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    
    return false;
  }
  
  // O(n)
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb); 
    }
    if (this.right) {
      this.right.depthFirstLog(cb); 
    }
  }
  
}
