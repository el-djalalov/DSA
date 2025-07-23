/*
For this topic you must know about the Greatest Common Divisor (GCD) and the MOD operation first.
The GCD of two or more integers is the largest integer that divides each of the integers such that their remainder is zero.
Here's an example:
GCD of 20, 30 = 10 (10 is the largest number which divides 20 and 30 with remainder of 0)
GCD of 42, 120, 285 = 3 (3 is the largest number which divides 42, 120 and 285 with remainder of 0)
Euclidean Algorithm for Greatest Common Divisor (GCD)
The Euclidean Algorithm finds the GCD of 2 numbers.
Assuming you want to calculate the GCD of 1220 and 516, let's apply the Euclidean Algorithm.

Pseudo Code of the Algorithm:

Step 1: Let a, b be the two numbers
Step 2: a mod b = R
Step 3: Let a = b and b = R
Step 4: Repeat Steps 2 and 3 until a mod b is greater than 0
Step 5: GCD = b
Step 6: Finish
*/

function GCD(a, b) {
	let R;
	while (a % b > 0) {
		R = a % b;
		a = b;
		b = R;
	}
	return b;
}
// Here's the Javascript Code to Perform GCD using Recursion:

function GCDRecursive(a, b) {
	if (b === 0) {
		return a;
	} else {
		return GCDRecursive(b, a % b);
	}
}

/*
*Understanding the Euclidean Algorithm
The Euclidean Algorithm is an efficient method for computing the GCD of two numbers. It is based on the principle that the GCD of two numbers also divides their difference. The algorithm works as follows:

Given two numbers, a and b, where a > b.
Compute the remainder R when a is divided by b (i.e., R = a % b).
Replace a with b and b with R.
Repeat the process until R becomes zero. The non-zero remainder just before this step is the GCD.
*/

function GCDMultiple(...args) {
	if (args.length < 2) {
		throw new Error("At least two numbers are required to find GCD.");
	}
	let gcd = args[0];
	for (let i = 1; i < args.length; i++) {
		gcd = GCD(gcd, args[i]);
	}
	return gcd;
}
/*
*Additional Examples
Example 1: GCD of Two Numbers
Input: GCD(48, 18)
Steps:
48 % 18 = 12 → a = 18, b = 12
18 % 12 = 6 → a = 12, b = 6
12 % 6 = 0 → Stop. GCD is 6.
Output: 6
Example 2: GCD of Three Numbers
Input: GCDMultiple(24, 36, 60)
Steps:
Compute GCD(24, 36) = 12.
Compute GCD(12, 60) = 12.
Output: 12
Example 3: GCD of Large Numbers
Input: GCD(1071, 462)
Steps:
1071 % 462 = 147 → a = 462, b = 147
462 % 147 = 21 → a = 147, b = 21
147 % 21 = 0 → Stop. GCD is 21.
Output: 21

*Edge Cases and Notes
Zero Handling: The GCD of a and 0 is a (as seen in the recursive function's base case).
Negative Numbers: The GCD is always non-negative. For negative inputs, take absolute values first.
Single Number: The GCD of a single number is the number itself, but the GCDMultiple function enforces at least two inputs.

*/
