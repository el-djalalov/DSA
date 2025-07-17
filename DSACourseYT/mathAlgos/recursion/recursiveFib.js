/*
Recursion
*What?
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.
Recursion is when a function calls itself
*Why?
A great technique to simplify your solution
If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful

* A few points about recursion
- Every recursive solution needs to have a base case - a condition to terminate the recursion.
- Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution is often slower.
- Recursion is a topic that is not the most straight forward to understand. Do not give up if you struggle with the concept.
*/
function recursiveFib(n) {
	if (n < 2) return n;
	return recursiveFib(n - 1) + recursiveFib(n - 2); // O (2^n)
}

console.log(recursiveFib(0)); // 0
console.log(recursiveFib(1)); // 1
console.log(recursiveFib(6)); // 8
