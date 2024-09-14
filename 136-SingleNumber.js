var singleNumber = function (nums) {
	const countNums = {};

	for (let num of nums) {
		countNums[num] = (countNums[num] || 0) + 1;
	}

	function getKeyByValue(object, value) {
		for (const key in object) {
			if (object[key] === value) {
				return key;
			}
		}
		return null;
	}

	return getKeyByValue(countNums, 1);
};

singleNumber([4, 1, 2, 1, 2]);
