// Solution 1: Custom Sorting (Built-in sort)

const largestNumber = nums => {
	nums = nums.map(String);

	nums.sort((a, b) => {
		let order1 = a + b;
		let order2 = b + a;
		return order2.localeCompare(order1);
	});

	// Edge case: if the largest number is 0, the entire number is 0
	if (nums[0] === "0") {
		return "0";
	}

	// Join the sorted array to get the largest number
	return nums.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
