// Time O(n) Space O(n)
const singleNumber = function (nums) {
	const countNums = {};

	for (let num of nums) {
		countNums[num] = (countNums[num] || 0) + 1;
	}

	for (let key in countNums) {
		if (countNums[key] === 1) {
			return Number(key);
		}
	}
};

// Optimal constant space: Time: O(n) Spcae: O(1)
function singleNumber2(nums) {
	let result = 0;

	for (let num of nums) {
		result ^= num;
	}
	return result;
}

const res = singleNumber2([4, 1, 2, 1, 2]);
console.log(res);
