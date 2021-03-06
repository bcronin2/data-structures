var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head) {
      list.tail.next = node;
    } else {
      list.head = node;      
    }
    list.tail = node;
  };

  // O(1)
  list.removeHead = function() {
    let formerHead = list.head.value;
    if (list.head) {
      list.head = list.head.next;
      if (!list.head) {
        list.tail = null;
      }
    }   
    return formerHead;
  };

  // O(1)
  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
