/* 1. Brute Force Approach:

Iterate through each element in list1
For each element, search for it in list2
If found, calculate the index sum
Keep track of the minimum index sum and all strings with that sum

Time Complexity: O(n * m), where n and m are lengths of list1 and list2
Space Complexity: O(k), where k is the number of common strings */

const findRestaurant = function (list1, list2) {
	// Step 1: Initialize variables
	let minIndexSum = Infinity;
	let result = [];

	// Step 2: Iterate through list1
	for (let i = 0; i < list1.length; i++) {
		// Step 3: Search for current element in list2
		const j = list2.indexOf(list1[i]);

		// Step 4: If found, calculate index sum
		if (j !== -1) {
			const indexSum = i + j;

			// Step 5: Update result based on index sum
			if (indexSum < minIndexSum) {
				minIndexSum = indexSum;
				result = [list1[i]];
			} else if (indexSum === minIndexSum) {
				result.push(list1[i]);
			}
		}
	}
	// Step 6: Return the result
	return result;
};

/* 2. Hash Map Approach:

Create a hash map to store elements from list1 with their indices
Iterate through list2, checking if each element exists in the hash map
If it does, calculate the index sum
Keep track of the minimum index sum and all strings with that sum

Time Complexity: O(n + m)
Space Complexity: O(n), where n is the length of list1 */

const findRestaurant2 = (list1, list2) => {
	// Step 1: Create a hash map for list1
	const map = new Map();
	for (let i = 0; i < list1.length; i++) {
		map.set(list1[i], i);
	}

	// Step 2: Initialize variables
	let minIndexSum = Infinity;
	let result = [];
	console.log(map);

	// Step 3: Iterate through list2
	for (let j = 0; j < list2.length; j++) {
		if (map.has(list2[j])) {
			const i = map.get(list2[j]);
			console.log(i);

			const indexSum = i + j;

			// Step 4: Update result based on index sum
			/* 	if (indexSum < minIndexSum) {
				minIndexSum = indexSum;
				result = [list2[j]];
			} else if (indexSum === minIndexSum) {
				result.push(list2[j]);
			} */
		}
	}
};

findRestaurant2(
	["Shogun", "Tapioca Express", "Burger King", "KFC"],
	["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);
