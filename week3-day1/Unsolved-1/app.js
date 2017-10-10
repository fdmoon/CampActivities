
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
	var cmpProfit = 0;
	var maxProfit = 0;

	var arrWin1 = [0, 0];
	var arrWin2 = [0, 0];

	for(var i=0; i<stockArray.length; i++){
		if(i === 0) {
			// initial setting
			arrWin1[0] = stockArray[0];
			arrWin1[1] = stockArray[0];
			arrWin2[0] = stockArray[0];
			arrWin2[1] = stockArray[0];
		}
		else {
			if(stockArray[i] > arrWin1[1]) {
				// if current price is max price, set to max price(arrWindow[1])
				arrWin1[1] = stockArray[i];
				arrWin2[1] = stockArray[i];
			}
			else if(stockArray[i] < arrWin1[0]) {
				arrWin2[0] = stockArray[i];
				arrWin2[1] = stockArray[i];
			}
			else if(stockArray[i] > arrWin2[1]) {
				arrWin2[1] = stockArray[i];	
			}

			maxProfit = arrWin1[1] - arrWin1[0];
			cmpProfit = arrWin2[1] - arrWin2[0];

			if(cmpProfit > maxProfit) {
				arrWin1[0] = arrWin2[0];
				arrWin1[1] = arrWin2[1];
				maxProfit = cmpProfit;
			}
		}
	}

	return (maxProfit * sharesBought);
};

// A Call to your Biggest Profit function.
console.log(biggestProfit(stockPrices, 10000));

console.log(biggestProfit([7,8,3,7,1,2], 10000));

console.log(biggestProfit([7,8,3,9,1,2], 10000));

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.

