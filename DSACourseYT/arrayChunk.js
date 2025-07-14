/*
Write a function that takes an array and a chunk size as input.
The function should return a new array where the original array is split into chunks of the given size.
E.x:
chunk([1,2,3,4,5,6,7,8], 3) => [[1,2,3], [4,5,6], [7,8]]
*/

function chunk(arr, chunkSize) {
	const resultArr = [];
	let currentChunk = [];

	for (const num of arr) {
		currentChunk.push(num); // Put numbers into current chunk array
		if (currentChunk.length === chunkSize) {
			resultArr.push(currentChunk);
			currentChunk = [];
		}
	}

	// What about leftover chunks ?  We put into result arr at the end
	if (currentChunk.length > 0) {
		resultArr.push(currentChunk);
	}

	return resultArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
