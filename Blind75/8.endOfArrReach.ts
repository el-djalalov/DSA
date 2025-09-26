/*  End of Array Reachable
Given an array of integers numbers where each element in the array represents the maximum number of positions that can be moved forward from that index; it is acceptable to move by fewer positions. Determine whether it is possible to reach the last index of the array by starting from the first index. Return true if it can be reached and false otherwise.
*/
// Solution 1: Forward Greedy approach (O(n) time complexity)
export default function arrayReachableEnd(numbers: number[]): boolean {
	let furthestReach = 0;

	for (let i = 0; i < numbers.length; i++) {
		// if our current position is beyond the furthest we can reach, we are stuck
		if (i > furthestReach) {
			return false;
		}
		// Update furthest we can reach from the current position
		furthestReach = Math.max(furthestReach, i + numbers[i]);

		// if we can reach or go past the last index, we have succeeded
		if (furthestReach >= numbers.length - 1) {
			return true;
		}
	}

	return false;
}

const nums = [2, 3, 1, 1, 4];

const res = arrayReachableEnd(nums);
console.log(res);
