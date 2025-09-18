function mostCommonElements(numbers: number[], k: number): number[] {
	if (k === numbers.length) {
		return numbers;
	}

	// Step 1: Count frequencies
	const frequencyMap: Record<number, number> = {};
	for (const num of numbers) {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	}
	// Step 2: Convert to an array of [number, frequency] pairs and sort by frequency in descending order
	const sortedElements = Object.entries(frequencyMap).sort(
		(a, b) => b[1] - a[1]
	);

	// Step 4: Extract the top k elements
	const result: number[] = [];
	for (let i = 0; i < k; i++) {
		result.push(Number(sortedElements[i][0]));
	}

	console.log(result);

	return result;
}

function mostCommonElementsBucketSort(numbers: number[], k: number): number[] {
	const freqMap = new Map<number, number>();
	for (const num of numbers) {
		// Step 1: Create a hash map to count the frequency of each element in numbers
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}

	// Step 2: Initialize a min-heap with a custom comparator to keep the most frequent elements
	const heap: number[] = [];
	const comp = (n1: number, n2: number) =>
		(freqMap.get(n1) || 0) - (freqMap.get(n2) || 0);

	// Step 3: Insert elems into the heap and maintain the size of the heap to K
	freqMap.forEach((_, key) => {
		heap.push(key);
		heap.sort(comp);
		if (heap.length > k) heap.shift();
	});

	return heap;
}

mostCommonElements([1, 1, 1, 2, 2, 3], 2); // [1, 2]
