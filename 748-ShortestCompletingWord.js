const shortestCompletingWord = function (licensePlate, words) {
	//Helper fn to count the chars
	const countChars = str => {
		const count = {};
		for (let char of str.toLowerCase()) {
			if (char >= "a" && char <= "z") {
				count[char] = (count[char] || 0) + 1;
			}
		}
		return count;
	};

	// Count characters in license plate
	const plateCount = countChars(licensePlate);
	console.log(plateCount);

	// Helper function to check if word completes the plate
	const isCompleting = word => {
		const wordCount = countChars(word);
		//console.log(wordCount);

		for (let char in plateCount) {
			if (!wordCount[char] || wordCount[char] < plateCount[char]) {
				return false;
			}
		}
		return true;
	};

	let res =
		words.filter(isCompleting).sort((a, b) => a.length - b.length)[0] || "";
	console.log(res);

	return res;
};

shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
