/*
Linear search
Problem – Given an array of ‘n’ elements and a target element ‘t’, find the index of ‘t’ in the array. Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6], t = 10 -> Should return 2
arr = [-5, 2, 10, 4, 6], t = 6 -> Should return 4
arr = [-5, 2, 10, 4, 6], t = 20 -> Should return -1
*/
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}

// O (n)

console.log(linearSearch([-5, 2, 10, 6, 8, 3], 10));
console.log(linearSearch([9, 23, 7, 6, 1, 3], 7));
console.log(linearSearch([32, 2, 8, 5, 21, 2], 5));
