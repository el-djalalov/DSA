function findMissingNumberInSequence(numbers: number[]): number {
	const n = numbers.length;

	for (let i = 0; i < n; i++) {
		let found = false;
		for (let j = 0; j < n; j++) {
			if (numbers[j] === i) {
				found = true;
				break;
			}
		}
		if (!found) {
			return i;
		}
	}

	return -1;
}

// Better optimized/mathematical solution
function findMissingNumberInSequence2(numbers: number[]): number {
	const n = numbers.length;
	const expectedSum = (n * (n + 1)) / 2; // formula to get the sum of numbers  from 0 - n

	const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
	const missingNum = expectedSum - actualSum;
	return missingNum;
}
