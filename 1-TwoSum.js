// 1. Brute force
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] === target) {
			return [i, i + 1];
		}
	}
};

twoSum([2, 7, 11, 15], 9);

// 2. Optimal solution
const twoSum2 = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const diff = target - array[i];
		if (map.has(diff)) {
			return [map.get(diff), i];
		}
		map.set(nums[i], i);
	}
};

const twoSum3 = function (nums, target) {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		let val = nums[i];
		obj[val] = i;
	}
	for (let i = 0; i < nums.length; i++) {
		let targetKey = target - nums[i];
		if (obj[targetKey] && obj[targetKey] !== i) {
			return [i, obj[targetKey]];
		}
	}
};
