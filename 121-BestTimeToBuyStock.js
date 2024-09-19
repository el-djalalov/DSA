/**
 * @param {number[]} prices
 * @return {number}
 */
// 1. Is currentPrice cheaper than minPrice ?
// 2. if yes, minPrice is updated to currentPrice
// 3. if currentPrice is greater than minPrice,
//    and if If sell now (currentPrice - minPrice) would the profit be greater than maxProfit ?;
// 4. if yes, I am ready to sell to get the maxProfit

const maxProfit = prices => {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			// 1
			minPrice = prices[i]; // 2
		} else if (prices[i] - minPrice > maxProfit) {
			// 3
			maxProfit = prices[i] - minPrice; // 4
		}
	}

	return maxProfit;
};
