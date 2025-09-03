function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}

		if (i !== minIndex) {
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}

	return arr;
}

const arr = [4, 2, 6, 5, 1, 6, 3];
const res = selectionSort(arr);
console.log(res);
