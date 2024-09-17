/* A sentence is a string of single-space separated words where each word consists only of lowercase letters.
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.

*/

const uncommonFromSentences = function (s1, s2) {
	let map = new Map();
	const arr = s1.split(" ").concat(s2.split(" "));

	arr.forEach(word => {
		map.set(word, (map.get(word) || 0) + 1);
	});
	const uniqueVals = Array.from(map.entries())
		.filter(([key, value]) => value === 1)
		.map(([key]) => key);

	console.log(uniqueVals);
};

uncommonFromSentences("this apple is sweet", "this apple is sour");
