/*
Power of Two
Problem: Give a positive integer 'n', determine if the number is a power of 2 or not.
An integer is a power of two if there exists an integer 'x' such that 'n' == 2^x
isPowerOfTwo(1) = true (2^0)
isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(5) = false
*/

function powerOf2(n) {
	if (n < 1) return false;
	while (n > 1) {
		if (n % 2 !== 0) return false;
		n = n / 2; //  O(log(n))
	}
	return true;
}

function powerOf2BitWise(n) {
	if (n <= 0) return false;
	return (n & (n - 1)) === 0; // O(1) constant
}

console.log(powerOf2BitWise(1)); // true (2^0)
console.log(powerOf2BitWise(2)); // true (2^1)
console.log(powerOf2BitWise(5)); // false
