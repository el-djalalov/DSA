function findDuplicates(numbers: number[]): boolean {
	numbers.sort((a, b) => a - b);

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === numbers[i + 1]) {
			return true;
		}
	}
	return false;
}

// Better way is with Set
function findDuplicates2(numbers: number[]): boolean {
	const seen: Set<number> = new Set();

	const n: number = numbers.length;

	for (let i = 0; i < n; i++) {
		if (seen.has(numbers[i])) {
			return true;
		}

		seen.add(numbers[i]);
	}
	return false;
}
