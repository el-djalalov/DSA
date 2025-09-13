/* Implement a function that reverses the bit order of a given 32-bit unsigned integer and returns its corresponding decimal representation*/

//1. Iterative Approach (Simple and Clear)
function bitReversal(n: number): number {
	let reversed = 0;
	// Loop 32 times to handle all 32 bits of the integer
	for (let i = 0; i < 32; i++) {
		// Left-shift the `reversed` number by 1. This makes room for the next bit.
		// For example, if `reversed` is 10 (binary), it becomes 100.
		reversed <<= 1;

		// Check if the current least significant bit of `n` is 1.
		// `n & 1` returns 1 if the last bit is set, otherwise 0.
		// If the last bit of `n` is 1, add it to the `reversed` number.
		if (n & 1) {
			reversed |= 1;
		}

		// Right-shift `n` by 1. This moves the next bit to the LSB position for the next iteration.
		// For example, if `n` is 12 (1100), it becomes 6 (110).
		n >>= 1;
	}
	// The `>>> 0` ensures the result is an unsigned 32-bit integer.
	return reversed >>> 0;
}

// 2. String Conversion Approach (Simple, but less performant)
function reverseBits(n: number): number {
	const binaryString = n.toString(2).padStart(32, "0");
	const reversedString = binaryString.split("").reverse().join("");

	return parseInt(reversedString, 2);
}
