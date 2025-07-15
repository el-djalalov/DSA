// Hello -> olleH

/*
1. Convert the string to array( split method )
2. Reverse the array( reverse method )
3. Convert the array back to string (join method)
 */


// 1. Classic built-ins (split / reverse / join)
const reversedStr1 = str => str.split("").reverse().join("");

// 2. Spread syntax
const reverseStr2 = str => [...str].reverse().join("");

// 3. For-loop (counting down)
const reverseStr3 = str => {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};

// 4. For-of loop with prepending
const reverseStr4 = str => {
	let reversed = "";
	for (const char of str) reversed = char + reversed;
	return reversed;
};

// 5. Array.reduceRight
const reverseStr5 = str => {
	const reversed = [...str].reduceRight((acc, char) => acc + char, "");
	return reversed;
};

//6. Array.reduce with prepending
const reverseStr6 = str => {
	const reversed = [...str].reduce((acc, char) => char + acc, "");
	return reversed;
};

// 7. Recursion
const reverseStr7 = str => {
	if (str === "") return "";
	return reverseStr7(str.slice(1) + str[0]);
};

// 8. Using a stack
const reverseStr8 = str => {
	const stack = [...str];
	let reversed = "";
	while (stack.length) reversed += stack.pop();
	return reversed;
};

// 9. ES2023 Array.toReversed
//Non-mutating counterpart to reverse
const reverseStr9 = str => {
	return (reversed = [...str].toReversed().join(""));
};

// 10. Generator + for…of
const reverseStr10 = str => {
	function* reverseIter(s) {
		for (let i = s.length - 1; i >= 0; i--) yield s[i];
	}
	return (reversed = [...reverseIter(str)].join(""));
};

// 11. Using Intl.Segmenter (Unicode-aware)
//const str = "☃️ test 🇺🇳 coffee ☕️ hello 👩🏾‍🔬";

const segmenter = new Intl.Segmenter();
const reversed = Array.from(segmenter.segment(str), seg => seg.segment)
	.reverse()
	.join("");

console.log(reversedStr1("hello"));
console.log(reversed);
