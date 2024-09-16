/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
	const morseCode = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--.",
		q: "--.-",
		r: ".-.",
		s: "...",
		t: "-",
		u: "..-",
		v: "...-",
		w: ".--",
		x: "-..-",
		y: "-.--",
		z: "--..",
	};

	const morseCodeTranslations = new Array(26);
	for (let i = 0; i < 26; i++) {
		morseCodeTranslations[i] = morseCode[String.fromCharCode(97 + i)]; // a - z
	}

	const morseSet = new Set();
	for (const word of words) {
		let morseWord = "";
		for (const char of word) {
			morseWord += morseCodeTranslations[char.charCodeAt(0) - 97];
		}
		morseSet.add(morseWord);
	}

	return morseSet.size;
};

uniqueMorseRepresentations();
