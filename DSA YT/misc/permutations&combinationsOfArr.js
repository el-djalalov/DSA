/*
Permutations = A permutation is a rearrangement of all the elements of an array.
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/
// Swapping elements to generate permutations
// Time Complexity: O(n!)
const permute = nums => {
	//global result variable to store all permutations
	const result = [];

	//dfs recursive helper function
	const dfs = (i, nums) => {
		//base case: if i equals nums length, we have a complete permutation
		if (i === nums.length) {
			result.push([...nums]); //push a copy of nums to result
			return;
		}
		// dfs recursive case: iterate through the array
		for (let j = i; j < nums.length; j++) {
			[nums[i], nums[j]] = [nums[j], nums[i]]; //swap elements
			dfs(i + 1, nums);
			[nums[i], nums[j]] = [nums[j], nums[i]]; //swap back to restore original order
		}
	};
	dfs(0, nums);
	return result;
};
// Backtracking approach to generate all permutations
// Time Complexity: O(n!)

const permute2 = (nums, arr = [], res = []) => {
	//base case
	if (nums.length === 0) res.push([...arr]); //if nums is empty, push the current permutation to res

	for (let i = 0; i < nums.length; i++) {
		console.log(
			`nums: ${nums}, arr: ${[...arr]}, i: ${i}, nums[i]: ${
				nums[i]
			}  res: ${res}`
		);
		let rest = nums.filter((n, index) => index !== i);
		//add current element to arr
		arr.push(nums[i]);
		permute2(rest, arr, res); //recurse with the remaining elements
		arr.pop(); //remove the last element to backtrack
	}
	return res;
};

console.log(permute2([1, 2, 3])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
