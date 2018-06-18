var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToHead = function(value) {
    let node = Node(value);
    if (list.head) {
      list.head.prev = node;
      node.next = list.head;      
    } else {
      list.tail = node;      
    }
    list.head = node;
  };

  // O(1)
  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head) {
      list.tail.next = node;
      node.prev = list.tail;
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
      } else {
        list.head.prev = null;        
      }
    }   
    return formerHead;
  };
  
  // O(1)
  list.removeTail = function() {
    let formerTail = list.tail.value;
    if (list.tail) {
      list.tail = list.tail.prev;
      if (!list.tail) {
        list.head = null;
      } else {
        list.tail.next = null;
      }
    } 
    return formerTail;
  };

  // O(n)
  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
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
  node.prev = null;

  return node;
};
