// TO RUN/VIEW, UNCOMMENT LAST LINE IN THIS FILE AND OPEN BROWSER CONSOLE WHEN LOADING SpecRunner.html

var defaultSlots = 18;
var defaultHashes = 3;
var slotToItemRatio = 9;
var numberOfTests = 1000;

var bloomProfiler = function() {
  var numberOfSlots = Number(prompt('Number of slots:')) || defaultSlots;
  var numberOfHashes = Number(prompt('Number of hash functions:')) || defaultHashes;
  var numberOfItems = numberOfSlots / slotToItemRatio;
  var falsePositiveRates = [];

  console.log('running tests...');

  for (var i = 0; i < numberOfTests; i++) {
    var bloomFilter = new BloomFilter(numberOfSlots, numberOfHashes);
    var falsePositives = 0;
    var filterItems = generateFilterItems(numberOfItems);
    for (var key in filterItems) {
      bloomFilter.add(key);
    }

    var testItems = generateTestItems(numberOfSlots, filterItems);
    for (var key in testItems) {
      if (bloomFilter.query(key) && !filterItems.hasOwnProperty(key)) {
        falsePositives++;
      }
    }

    falsePositiveRates.push(falsePositives / Object.keys(testItems).length);
  }

  printOutput(falsePositiveRates, numberOfSlots, numberOfHashes, numberOfItems);
};


// HELPER FUNCTIONS

var printOutput = function(falsePositiveRates, numberOfSlots, numberOfHashes, numberOfItems) {
  var result = averageRate(falsePositiveRates);
  var approximateRate = getApproximateRate(numberOfSlots, numberOfHashes, numberOfItems); 
  var maxRate = getMaxRate(numberOfSlots, numberOfHashes, numberOfItems);
  console.log(`You ran ${numberOfTests} tests with ${numberOfSlots} slots and ${numberOfHashes} hashes.`);
  console.log(`The tests produced an average false positive rate of ${result}%.`);
  console.log(`The theoretical expected rate is ${approximateRate}%.`);
  console.log(`The theoretical max rate is ${maxRate}%.`);
};

var getApproximateRate = function(numberOfSlots, numberOfHashes, numberOfItems) {
  return (Math.pow(1 - Math.pow(Math.E, (-1 * numberOfHashes * numberOfItems) / numberOfSlots), numberOfHashes) * 100).toFixed(4);
};

var getMaxRate = function(numberOfSlots, numberOfHashes, numberOfItems) {
  return (Math.pow(1 - Math.pow(Math.E, (-1 * numberOfHashes * (numberOfItems + 0.5)) / (numberOfSlots - 1)), numberOfHashes) * 100).toFixed(4);
};

var generateFilterItems = function(numberOfItems) {
  var items = {};
  for (var i = 0; i < numberOfItems; i++) {
    items[generateString()] = true;
  }

  return items;
};

var generateTestItems = function(range, filterItems) {
  var items = {};
  for (var i = 0; i < 9 * range; i++) {
    items[generateString()] = true;
  }
  for (var key in filterItems) {
    items[key] = true;
  }

  return items;
};

var generateString = function() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var averageRate = function(rates) {
  var sum = rates.reduce(function(sum, rate) {
    return sum + rate;
  });

  return (sum / rates.length * 100).toFixed(4);
};


// bloomProfiler(); // UNCOMMENT TO RUN WITH SpecRunner.html
