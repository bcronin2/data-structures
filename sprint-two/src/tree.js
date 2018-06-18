var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  Object.assign(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {
  
  // O(1)
  addChild: function(value) {
    var child = Tree(value);
    this.children.push(child);
  },

  // O(n)
  contains: function(target) {
    if (target === this.value) {
      return true;
    }
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};
