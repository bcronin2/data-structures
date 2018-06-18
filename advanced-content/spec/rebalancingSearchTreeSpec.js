describe('rebalancingSearchTree', function() {
  var rebalancingSearchTree;

  beforeEach(function() {
    rebalancingSearchTree = new RebalancingSearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(rebalancingSearchTree.insert).to.be.a('function');
    expect(rebalancingSearchTree.contains).to.be.a('function');
    expect(rebalancingSearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    rebalancingSearchTree.insert(2);
    rebalancingSearchTree.insert(3);
    rebalancingSearchTree.insert(7);
    rebalancingSearchTree.insert(6);
    expect(rebalancingSearchTree.left.value).to.equal(2);
    expect(rebalancingSearchTree.right.right.value).to.equal(7);
  });

  it('should have a working "contains" method', function() {
    rebalancingSearchTree.insert(2);
    rebalancingSearchTree.insert(3);
    rebalancingSearchTree.insert(7);
    expect(rebalancingSearchTree.contains(7)).to.equal(true);
    expect(rebalancingSearchTree.contains(8)).to.equal(false);    
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    rebalancingSearchTree.insert(2);
    rebalancingSearchTree.insert(3);
    rebalancingSearchTree.insert(7);
    rebalancingSearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });
  
  // ADDITIONAL TESTS
  it('should be unchanged when duplicate value is inserted', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    rebalancingSearchTree.insert(2);
    rebalancingSearchTree.insert(2);
    rebalancingSearchTree.insert(7);
    rebalancingSearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 7]);
  });

  it('should correctly return tree height', function() {
    expect(rebalancingSearchTree.height).to.equal(1);
    rebalancingSearchTree.insert(2);
    expect(rebalancingSearchTree.height).to.equal(2);
    rebalancingSearchTree.insert(8);
    expect(rebalancingSearchTree.height).to.equal(2);
    rebalancingSearchTree.insert(12);
    expect(rebalancingSearchTree.height).to.equal(3);
  });

  it ('should rebalance so that height is never greater than ceil(log n)', function() {
    rebalancingSearchTree.insert(1);
    rebalancingSearchTree.insert(2);
    expect(rebalancingSearchTree.height).to.equal(2);
    rebalancingSearchTree.insert(0.5);
    rebalancingSearchTree.insert(1.5);
    expect(rebalancingSearchTree.height).to.equal(3);
    rebalancingSearchTree.insert(1.5);
    rebalancingSearchTree.insert(2.5);
    expect(rebalancingSearchTree.height).to.equal(3);
    rebalancingSearchTree.insert(3.5);
    rebalancingSearchTree.insert(4.5); 
    expect(rebalancingSearchTree.height).to.equal(4); 
    console.log(rebalancingSearchTree.toString()); 
  });
  
});
