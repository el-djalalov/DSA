function isPalindrome(x) {
	// Handle negative numbers and 0
	if (x < 0) {
		return false;
	}

	// Convert the number to a string and reverse it
	const reversedStr = x.toString().split("").reverse().join("");

	console.log(x === parseInt(reversedStr));
	
	// Compare the original number and the reversed string
	return x === parseInt(reversedStr);
}

isPalindrome(121); // true

// Solution 2 
// 2 pointer approach

const isPalindrome = x => {
	if (x < 0) return false;

	strNum = x.toString();

	let left = 0;
	let right = strNum.length - 1;

	while (left < right) {
		if (strNum[left] !== strNum[right]) return false;
		left++;
		right--;
	}
	return true;
};
