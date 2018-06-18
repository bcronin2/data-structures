var resizeThresholds = [0.25, 0.75];

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

// O(1) (amortized, and assuming minimal collisions)
HashTable.prototype.insert = function(k, v) {
  if (this._size >= resizeThresholds[1] * this._limit) {
    this._resize(this._limit * 2);  
  }

  var index = this._assignIndex(k);
  if (!this._storage.get(index)) {
    this._size++;
  }
  this._storage.set(index, {key: k, value: v});
};

// O(1) (assuming minimal collisions)
HashTable.prototype.retrieve = function(k) {
  var index = this._assignIndex(k);
  if (this._storage.get(index)) {
    return this._storage.get(index).value;
  }
};

// O(1) (amortized, assuming minimal collisions)
HashTable.prototype.remove = function(k) {
  var index = this._assignIndex(k);
  if (this._storage.get(index)) {
    this._size--;
    this._storage.set(index, undefined);
  } 

  if (this._size < this._limit * resizeThresholds[0] && this._limit > 8) {
    this._resize(this._limit / 2);  
  }
};


// HELPER FUNCTIONS

// O(n)
HashTable.prototype._resize = function(newSize) {
  var temp = [];
  for (var i = 0; i < this._limit; i++) {
    if (this._storage[i]) {
      temp.push(this._storage[i]);
    }
  }
  this._limit = newSize;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i].key, temp[i].value);
  }
};

// O(n)
HashTable.prototype._assignIndex = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._storage.get(index) && this._storage.get(index).key !== k) {
    index = (index + 1) % this._limit;
  }
  return index;
};
