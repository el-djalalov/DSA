/* 
Given 2 strings, write a func to determine if the second string is an anagram of the first. 
Anagram is a word or name formed by rearranging the letters of another such as cinema => iceman.
*/

function anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let letterCounter1 = {};
	let letterCounter2 = {};

	for (let letter of str1) {
		letterCounter1[letter] = (letterCounter1[letter] || 0) + 1;
	}
	for (let letter of str2) {
		letterCounter2[letter] = (letterCounter2[letter] || 0) + 1;
	}
	for (let count in letterCounter1) {
		if (
			count in letterCounter2 &&
			letterCounter1[count] === letterCounter2[count]
		) {
			delete letterCounter1[count];
		}

		if (letterCounter1[count]) {
			return false;
		}
	}
	return true;
}

// Better version

function anagram2(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const obj = {};
	for (let val of str1) {
		obj[val] = (obj[val] || 0) + 1;
	}
	for (let val2 of str2) {
		if (!obj[val2]) {
			return false;
		} else {
			obj[val2] -= 1;
		}
	}
	return true;
}
console.log(anagram2("qwerty", "qeywrt"));
