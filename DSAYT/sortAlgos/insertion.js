/*
Insrtion sort Idea:
Virtually solit the array into a sorted and and unsorted part;
Assume that the first elementis already sorted and remaining elements are unsorted
Select an unsorted element and compare with all elelments in the sorted part
If the elemeents in teh sorted part is smaller than the selected element proceed to the next element in the unsorted part. Else shift larfer elenents in the sorted part towards the right
Insert the selected element at the right index
Repeat till all the unsorted elements are placed in the right order
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const numberToInsert = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = numberToInsert;
	}
	return arr;
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);
