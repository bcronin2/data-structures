var Set = function() {
  var set = Object.create(setPrototype);
  set._dataStorage = {};
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item) {
  this._dataStorage[JSON.stringify(item)] = true;
};

// O(1)
setPrototype.contains = function(item) {
  return this._dataStorage.hasOwnProperty(JSON.stringify(item));
};

// O(1)
setPrototype.remove = function(item) {
  delete this._dataStorage[JSON.stringify(item)];
};
