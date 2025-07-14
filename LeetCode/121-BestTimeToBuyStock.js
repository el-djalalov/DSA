/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
	// Smallest price we have seen so far.
	//    Start with +∞ so the first real price will replace it.
	let minPrice = Infinity;

	// Largest profit we have been able to earn so far.
	//    Start at 0 because “do nothing” is always an option.
	let maxProfit = 0;

	// Scan the array once from left to right (i = day index)
	for (let i = 0; i < prices.length; i++) {
		// If today’s price is lower than ANYTHING we’ve seen,
		//    treat today as a better “buy” day.
		if (prices[i] < minPrice) {
			minPrice = prices[i]; // new all-time low
			/*
				i=0, min=7
				i=1, min=5
				i=2, min=1
				i=3, min=1
				i=4, min=1
				i=5, min=1
			*/
		} else if (prices[i] - minPrice > maxProfit) {
			maxProfit = prices[i] - minPrice;
			/*
				i=3, maxProfit=3
				i=4, maxProfit=5
				i=5, maxProfit=5
			*/
		}
	}
	return maxProfit;
};
const maxProfit2 = () => {
	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		const currentPrice = prices[i];
		// keep lowest price so far (potential buy)
		minPrice = Math.min(minPrice, currentPrice);

		// potential profit if we sold today
		const potentialProfit = currentPrice - minPrice;
		maxProfit = Math.max(maxProfit, potentialProfit);
	}
	return maxProfit;
};

const prices = [7, 5, 1, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Max profit ", profit);
