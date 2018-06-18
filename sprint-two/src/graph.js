var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// O(1)
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// O(n)
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// O(n^2) (worst-case, if there are many edges)
Graph.prototype.removeNode = function(node) {
  var toRemove = this.nodes.indexOf(node);
  this.nodes.splice(toRemove, 1);
  for (var i = this.edges.length - 1; i >= 0; i--) {
    this.edges.splice(i, 1);
  }
};

// O(n^2) (worst-case, if there are many edges)
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode) && !this.hasEdge(fromNode, toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

// O(n^2) (worst-case, if there are many edges)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// O(n^2) (worst-case, if there are many edges)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// O(n)
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};
