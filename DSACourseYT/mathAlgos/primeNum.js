/*
Prime Number
Problem: Give a natural number 'n', determine if the number is prime or not.
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

function isPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		//  (i < n) in the loop is O(n), so optimized version would be Math.sqrt(n) which is O(sqrt(n))
		// So if n = 1000 then it will run 100 times instead of 1000

		if (n % i === 0) return false;
	}
	return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
