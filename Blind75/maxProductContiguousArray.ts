// Brute force approach

function maxProductBruteForce(nums: number[]): number {
	const n = nums.length;
	let maxProduct = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < n; i++) {
		let currentProduct = 1;

		for (let j = 0; j < n; j++) {
			currentProduct *= nums[j];
			maxProduct = Math.max(maxProduct, currentProduct);
		}
	}

	return maxProduct;
}

// Optimized solution

function maxProduct(nums: number[]): number {
	const n = nums.length;

	let minProduct = nums[0];
	let maxProduct = nums[0];
	let result: number = nums[0];

	for (let i = 1; i < n; i++) {
		const curr = nums[i];
		if (curr < 0) {
			[maxProduct, minProduct] = [minProduct, maxProduct];
		}
		maxProduct = Math.max(curr, maxProduct * curr);
		minProduct = Math.min(curr, minProduct * curr);

		result = Math.max(result, maxProduct);
	}
	console.log(result);

	return result;
}
maxProduct([2, 3, -2, 4]);
