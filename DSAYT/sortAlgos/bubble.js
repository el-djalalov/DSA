/*
  Bubble Sort idea
  Compare adjacent elements in the array and swap the positions if they are not in the intended order
  Repeat the the instruction as you step thougth each element in the array
  Once you step through the whole array with no swaps, the array is sorted
  */

function bobbleSort(arr) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				//Swap
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

// O (n^2)

const arr = [8, 20, 6, -7, -2, 1];
bobbleSort(arr);
console.log(arr);
