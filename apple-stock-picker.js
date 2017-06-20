var stockPrices = [10, 7, 5, 8, 11, 9];

function stockPicks(stockPrices) {
  let lowestValue = getLowestValue(stockPicks);
  let highestValue = getHighestValue(stockPicks);

  // console.log(lowestValue);
  // console.log(highestValue);
};

function getLowestValue(stockPicks) {
  return Math.min.apply(null, stockPrices);
};

function getHighestValue(stockPicks) {
  return Math.max.apply(null, stockPrices);
};

stockPicks(stockPrices);
