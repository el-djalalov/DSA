/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestSubstring = s => {
	const vowels = "aeiou";
	const map = new Map();
	map.set(0, -1);
	let state = 0;
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		const vowelIndex = vowels.indexOf(char);

		if (vowelIndex !== -1) {
			state ^= 1 << vowelIndex;
		}

		if (map.has(state)) {
			maxLen = Math.max(maxLen, i - map.get(state));
		} else {
			map.set(state, i);
		}
	}

	return maxLen;
};
findTheLongestSubstring("eleetminicoworoep"); // 13
/* The longest substring is "leetminicowor" which contains two each of the vowels: 
   e, i and o and zero of the vowels: a and u.
 */
