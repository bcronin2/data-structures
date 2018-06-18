// TO CREATE A GRAPH FROM AN INPUT FILE AND TEST NODE CONNECTIONS, UNCOMMENT LINES AT THE BOTTOM OF THE FILE

var AdvancedGraph = function() {
  this.nodes = {};
};

// O(1)
AdvancedGraph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes[node] = [];
  }
};

// O(1)
AdvancedGraph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// O(n) (worst-case, if there are many edges)
AdvancedGraph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes[node].length; i++) {
    var toNode = this.nodes[node][i];
    var indexToRemove = this.nodes[toNode].indexOf(node);
    this.nodes[toNode].splice(indexToRemove, 1);
  }
  delete this.nodes[node];
};

// O(1)
AdvancedGraph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode) && !this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// O(n) (worst-case, if there are many edges)
AdvancedGraph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    return this.nodes[fromNode].includes(toNode);
  }
  return false;
};

// O(n) (worst-case, if there are many edges)
AdvancedGraph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    var toIndex = this.nodes[fromNode].indexOf(toNode);
    var fromIndex = this.nodes[toNode].indexOf(fromNode);
    this.nodes[fromNode].splice(toIndex, 1);
    this.nodes[toNode].splice(fromIndex, 1);
  }
};

// O(n)
AdvancedGraph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

// O(n) (worst-case, if there are many edges)
AdvancedGraph.prototype.depthFirstSearch = function(startNode, targetNode) {
  if (!this.contains(startNode) || !this.contains(targetNode)) {
    return false;
  }
  return this._depthFirstSearchHelper(startNode, targetNode, {}, []);
};


// HELPER FUNCTIONS

// O(n) (worst-case, if there are many edges)
AdvancedGraph.prototype._depthFirstSearchHelper = function(startNode, targetNode, visited, toVisit) {
  if (startNode === targetNode || startNode === undefined) {
    return startNode === targetNode;
  }
  visited[startNode] = true;
  for (var i = 0; i < this.nodes[startNode].length; i++) {
    if (!visited.hasOwnProperty(this.nodes[startNode][i])) {
      toVisit.push(this.nodes[startNode][i]);
    }
  }
  return this._depthFirstSearchHelper(toVisit.pop(), targetNode, visited, toVisit);
};


// GRAPH READER - UNCOMMENT TO RUN WITH 'node advancedGraph.js' IN CONSOLE (RE-COMMENT TO RE-ENABLE SpecRunner.html)
/*
var generateGraph = function(lines, format, separator) {
  var graph = new AdvancedGraph();
  lines.forEach(function(line) {
    if (format.test(line)) {
      var nodes = line.split(separator);
      var node1 = Number(nodes[0].trim());
      var node2 = Number(nodes[1].trim());
      graph.addNode(node1);
      graph.addNode(node2);
      graph.addEdge(node1, node2);
    }
  });
  return graph;
};

var fs = require('fs');
var lines = fs.readFileSync('./adjacency-lists/large.csv').toString().split('\n');

// you may want to change values below on input file and desired output
var format = /^[0-9]+[\,][0-9]+/;
var node1 = 0;
var node2 = 999999;

var graph = generateGraph(lines, format, '\,'); // third argument depends on input file
//console.log(graph); // uncomment to see graph

var areConnected = graph.depthFirstSearch(node1, node2);
console.log(`${node1} and ${node2} are connected === ${areConnected}`);
*/
