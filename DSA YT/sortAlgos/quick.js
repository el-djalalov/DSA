/*
  Identify the pivot element in the array
    How do we select the pivot element ?
  - Pick first element as pivot
  - Pick last element as pivot
  - Pick a random element as pivot
  - Pick median as pivot
Put everthing that is smaller the pivot into a 'left' array and everyhing that is greater that the pivot into a 'right' array
Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
Repeatedly concatenate the left array, pivot and right array till one sorted array remains
*/

/*
Below is Naive / Normal way of quick sort but this is not efficent.
Goal: instead of always using “last element” as the pivot, pick the middle value of (first, middle, last).
That one extra look-ahead is enough to avoid the worst “already-sorted” case that kills plain quick-sort.
*/
function quickSort(arr) {
	if (arr.length < 2) return arr;
	let pivot = arr[arr.length - 1];
	let right = [];
	let left = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// Optimized version with pivot selection of the median-of-three method,

function quickSort2(arr) {
	if (arr.length < 2) return arr;
	const mid = Math.floor(arr.length / 2);
	const a = 0,
		b = mid,
		c = arr.length - 1;

	const pivotIndex = medianIndex(a, b, c);

	[arr[pivotIndex], arr[arr.length - 1]] = [
		arr[arr.length - 1],
		arr[pivotIndex],
	];

	function medianIndex(i, j, k) {
		const x = arr[i],
			y = arr[j],
			z = arr[k];
		if ((x - y) * (z - x) >= 0) return i; // is x median
		if ((y - x) * (z - y) >= 0) return j; // is y median
		return k; // otherwise z
	}

	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, 6];
console.log(quickSort2(arr));
