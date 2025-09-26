// https://leetcode.com/problems/search-in-rotated-sorted-array/
/*  Find Element in Rotated Sorted Array
There is an integer array numbers sorted in ascending order (with distinct values).
Prior to being passed to your function, numbers is rotated at an unknown pivot index k (0 <= k < numbers.length) such that the resulting array is [numbers[k], numbers[k+1], ..., numbers[n-1], numbers[0], numbers[1], ..., numbers[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array numbers after the rotation and an integer target, return the index of target if it is in numbers, or -1 if it is not in numbers.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/

// 1. Brute Force (Linear Search)
/*
Time complexity: O(n)
Space complexity: O(1)
*/
function findInRotatedArrayBruteForce(
	numbers: number[],
	target: number
): number {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === target) return i;
	}
	return -1;
}

// 2. Modified Binary Search (Optimal) with O(log n)
// Key observation: Even though the array is rotated, at least one half (left or right) is always sorted.
function findInRotatedArray(numbers: number[], target: number): number {
	let left = 0,
		right = numbers.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (numbers[mid] === target) return mid;

		if (numbers[left] <= numbers[mid]) {
			if (target >= numbers[left] && target < numbers[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (target > numbers[mid] && target <= numbers[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
}
