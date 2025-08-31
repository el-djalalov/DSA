function wordCounter(text: string): Record<string, number> {
	const lowerText = text.toLowerCase();
	const wordMap: Record<string, number> = {};

	const words = lowerText.split(/\s+/);
	console.log(words);

	for (const word of words) {
		if (word in wordMap) {
			wordMap[word]++;
		} else {
			wordMap[word] = 1;
		}
	}

	console.log(wordMap);

	return wordMap;
}

const text = "Hello my name name name is John";
wordCounter(text);
