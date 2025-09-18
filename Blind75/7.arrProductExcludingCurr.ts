// Solution 1: Brute force (O(n^2) time complexity)
function arrayProductExcludingCurrent(numbers: number[]): number[] {
	const n = numbers.length;
	const result: number[] = [];

	for (let i = 0; i < n; i++) {
		let currentProduct = 1;
		for (let j = 0; j < n; j++) {
			if (i !== j) {
				currentProduct *= numbers[j];
			}
		}
		result.push(currentProduct);
	}

	return result;
}
const res = arrayProductExcludingCurrent([1, 2, 3]);
console.log(res);

// Example:
// numbers = [1, 2, 3]
// i = 0: currentProduct = 1 * numbers[1] * numbers[2] = 1 * 2 * 3 = 6. result = [6]
// i = 1: currentProduct = 1 * numbers[0] * numbers[2] = 1 * 1 * 3 = 3. result = [6, 3]
// i = 2: currentProduct = 1 * numbers[0] * numbers[1] = 1 * 1 * 2 = 2. result = [6, 3, 2]

function arrayProductExcludingCurrent2(nums: number[]): number[] {
	const n = nums.length;
	if (n === 0) return [];
	const prefixProducts: number[] = new Array(n).fill(1);
	let currentPrefixProduct = 1;

	for (let i = 0; i < n; i++) {
		prefixProducts[i] = currentPrefixProduct;
		currentPrefixProduct *= nums[i];
	}

	const suffixProducts: number[] = new Array(n).fill(1);
	let currentSuffixProduct = 1;
	for (let i = n - 1; i >= 0; i--) {
		suffixProducts[i] = currentSuffixProduct;
		currentSuffixProduct *= nums[i];
	}

	const result: number[] = [];
	for (let i = 0; i < n; i++) {
		result[i] = prefixProducts[i] * suffixProducts[i];
	}

	return result;
}
