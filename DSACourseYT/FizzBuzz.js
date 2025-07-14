// Print numbers 1 to n
// if number is divisable by 3, print "Fizz"
// if number is divisable by 5, print "Buzz"
// if number is divisable by 3 and 5, print "FizzBuzz"
// Else print the number

const fizzBuzz = n => {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};

console.log(fizzBuzz(15));
