class BalancingSearchTree {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent || null;
    this.left = { height: 0 };
    this.right = { height: 0 };
    this.height = 1;
  }

  // O(log n)
  insert(value) {
    if (value < this.value) {
      if (!this.left.height) {
        this.left = new BalancingSearchTree(value, this);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right.height) {
        this.right = new BalancingSearchTree(value, this);
      } else {
        this.right.insert(value);
      }
    }
    this.height = Math.max(this.left.height, this.right.height) + 1;
    this._balanceIfNecessary();
  }

  // O(log n)
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value && this.left.height) {
      return this.left.contains(value);
    }
    if (value > this.value && this.right.height) {
      return this.right.contains(value);
    }
    return false;
  }

  // O(n)
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left.height) {
      this.left.depthFirstLog(cb);
    }
    if (this.right.height) {
      this.right.depthFirstLog(cb);
    }
  }

  // O(n)
  toString() {
    var rows = this._getRows();
    var str = spacesForRow(1, rows.length) + rows[0][0].value + '\n\n';

    for (var rowIndex = 1; rowIndex < rows.length; rowIndex++) {
      str += spacesForRow(rowIndex + 1, rows.length);
      var parentIndex = 0;

      for (
        var childIndex = 0;
        childIndex < rows[rowIndex].length;
        childIndex++
      ) {
        var childNode = rows[rowIndex][childIndex];
        var parentNode = rows[rowIndex - 1][parentIndex];
        var nodeLength = childNode.value.toString().length;

        while (
          childNode.parent !== parentNode &&
          parentIndex < rows[rowIndex - 1].length
        ) {
          str += spacesForRow(rowIndex - 1, rows.length, nodeLength);
          parentNode = rows[rowIndex - 1][++parentIndex];
        }

        if (childNode.value < parentNode.value) {
          str += childNode.value;
        } else {
          str +=
            spacesForRow(rowIndex, rows.length, nodeLength) +
            childNode.value +
            spacesForRow(rowIndex, rows.length);
          parentIndex++;
        }
      }

      str += '\n\n';
    }

    return str;
  }

  // HELPER FUNCTIONS

  _balanceIfNecessary() {
    if (this.left.height - this.right.height > 1) {
      this._balance('left', 'right');
    } else if (this.right.height - this.left.height > 1) {
      this._balance('right', 'left');
    }

    return this;
  }

  _balance(side1, side2) {
    if (this[side2].height || this[side1][side2].height) {
      var newRoot = this[side1]._getExtremum(side2);
      newRoot.parent[side2] = newRoot[side1];
      if (newRoot[side1].height) {
        newRoot[side1].parent = newRoot.parent;
      }
      newRoot.parent.height =
        Math.max(newRoot.parent[side1].height, newRoot.parent[side2].height) +
        1;

      var newChild = new BalancingSearchTree(this.value, this);
      newChild[side2] = this[side2];

      this.value = newRoot.value;
      this[side2].parent = newChild;
      this[side2] = newChild;
      this[side2].height++;
      this.height = this[side1]._balanceIfNecessary().height + 1;
    } else {
      this[side2] = new BalancingSearchTree(this.value, this);
      this.value = this[side1].value;
      this[side1] = this[side1][side1];
      this[side1].parent = this;
    }
  }

  _getExtremum(direction) {
    if (!this[direction].height) {
      return this;
    }

    var current = this[direction];
    while (current[direction].height) {
      current = current[direction];
    }

    return current;
  }

  _getRows() {
    var nodes = [this];
    var rows = [[]];
    while (nodes.length) {
      var nextNode = nodes.shift();
      rows[rows.length - 1].push(nextNode);
      if (nextNode.left.height) {
        nodes.push(nextNode.left);
      }
      if (nextNode.right.height) {
        nodes.push(nextNode.right);
      }
      if (
        nodes.length &&
        (nextNode.value > nodes[0].value || nextNode === nodes[0].parent)
      ) {
        rows.push([]);
      }
    }
    return rows;
  }
}

var spacesForRow = function(index, total, offset) {
  return nSpaces(Math.pow(2, 2 + total - index) - (offset ? offset : 3));
};

var nSpaces = function(n) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str += ' ';
  }
  return str;
};
