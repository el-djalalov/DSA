// Brute force approach
function maxSumSubArray(nums: number[]): number {
	const n = nums.length;
	if (n === 0) return 0;
	if (n === 1) return nums[0];
	let result = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < n; i++) {
		let currentSum = 0;
		for (let j = i; j < n; j++) {
			currentSum += nums[j];
			result = Math.max(currentSum, result);
		}
	}

	return result;
}

console.log(maxSumSubArray([-1, 5, -3, 9, -11]));
// Optimal solution with linear time complexity, O(N), and constant space complexity, O(1).
// This solution is also called Kadane's Algorithm
function maxSubArr2(nums: number[]): number {
	let currentMax = 0;
	let result = -Infinity;
	for (let num of nums) {
		currentMax = Math.max(num, currentMax + num);
		result = Math.max(result, currentMax);
	}

	return result;
}

console.log(maxSubArr2([1, 2, 3, 4]));
