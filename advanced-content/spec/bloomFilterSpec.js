// Bloom filter TDD

describe('bloomFilter', function() {
  let bloomFilter;
  let m = 18;
  let k = 3;
  
  beforeEach(function() {
    bloomFilter = new BloomFilter(m, k);
  });

  it('should have methods named "add" and "query"', function() {
    expect(bloomFilter.add).to.be.a('function');
    expect(bloomFilter.query).to.be.a('function');

  });
  
  // check if an item 
  it('should contain an item that has been added', function() {
    bloomFilter.add('test');
    expect(bloomFilter.query('test')).to.equal(true);
  });
  
});
