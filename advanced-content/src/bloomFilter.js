var BloomFilter = function(m, k) {
  this.bits = new Array(m);
  this.hashes = generateHashFunctions(m, k);
};

// O(k) (number of hashes)
BloomFilter.prototype.add = function(item) {
  for (let i = 0; i < this.hashes.length; i++) {
    this.bits[this.hashes[i](JSON.stringify(item))] = 1;
  }
};

// O(k) (number of hashes)
BloomFilter.prototype.query = function(item) {
  for (let i = 0; i < this.hashes.length; i++) {
    if (!this.bits[this.hashes[i](JSON.stringify(item))]) {
      return false;
    }
  }
  return true;
};


// HELPER FUNCTIONS

// O(1)
let fnv32a = function(init, limit) {
  return function(str) {
    var hval = init;
    for (var i = 0; i < str.length; ++i) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return (hval >>> 0) % limit;
  };
};

// O(k) (number of hashes)
let generateHashFunctions = function(m, k) {
  let hashes = [];
  let init = Math.floor(10000 * Math.random());
  for (let i = init; i < init + k; i++) {
    hashes.push(fnv32a(i, m));
  }
  return hashes;
};
