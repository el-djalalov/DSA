// Brute Force O(n^2)
function countConsistentStrings(allowed, words) {
	const allowedSet = new Set(allowed);
	let count = 0;

	for (const word of words) {
		let isConsistent = true;

		for (const char of word) {
			if (!allowedSet.has(char)) {
				isConsistent = false;
				break;
			}
		}

		if (isConsistent) {
			count++;
		}
	}
	console.log(count); // 2
	return count;
}

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]); // 2

// Optimized O(n * m)
function countConsistentLetters(allowed, words) {
	const allowedSet = new Set(allowed);

	return words.filter(word =>
		word.split("").every(char => allowedSet.has(char))
	).length;
}
