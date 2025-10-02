/*
Imagine you have a list of numbers and a target number. Your job is to find two numbers in 
that add up to the target number. You also need to tell which positions (indexes) those two numbers are at in the list
*/

// 1. Brute force
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};
// This can return correct values, but if 1 pair is at the end it can not because of i + 1

// 2. Optimal solution

const twoSum2 = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) {
			return [map.get(diff), i];
		}
		map.set(nums[i], i);
	}
};
// different approach

const twoSum3 = function (nums, target) {
	let obj = {};
	const n = nums.length;

	for (let i = 0; i < n; i++) {
		let val = nums[i];
		obj[val] = i;
	}

	for (let i = 0; i < n; i++) {
		let targetKey = target - nums[i];
		if (obj[targetKey] && obj[targetKey] !== i) {
			return [i, obj[targetKey]];
		}
	}
};

const twoSum4 = function (nums, target) {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		let targetKey = target - nums[i];
		if (targetKey in obj) {
			return [obj[targetKey], i];
		}
		obj[nums[i]] = i;
	}
};

console.log(twoSum2([2, 5, 11, 7], 9));
