/*
Problem statement
• You have n disks, all different diameters, stacked in size order on one peg (source).
• Two empty pegs (auxiliary and target) are available.
• Move the whole stack to the target peg under two rules:

Only one disk may be moved at a time.
A bigger disk can never sit on top of a smaller one.
THere are 3 ways to solve it, each illustrating a different idea.
1.Pure-Recursive (text-book solution)
  -To move n disks from from → to, first move n-1 disks to spare, move the big one, then move the n-1 disks to to.
2. Iterative (bit-pattern / Gray-code trick)
  -The optimal sequence is basically counting in binary (or Gray code) from 1 to 2ⁿ − 1.
  -Disk k moves every 2ᵏ steps.
  -For odd n, the smallest disk always cycles A → C → B → A; for even n, A → B → C → A.
3. Explicit-Stack Simulation (iterative but “recursive style”)
  -Emulate the recursion with our own stack objects: {n, from, to, spare, stage}.
  -Avoids call-stack overflow, keeps the familiar recursive algorithm.
*/

function hanoi(n, fromRod = "A", toRod = "C", middleRod = "B", moves = []) {
	if (n === 0) return moves; // nothing to do
	hanoi(n - 1, fromRod, middleRod, toRod, moves); // step 1
	moves.push(`${fromRod} → ${toRod}`); // step 2
	hanoi(n - 1, middleRod, toRod, fromRod, moves); // step 3
	return moves;
}

console.log(hanoi(3).join("\n"));

/*
Complexity
• Time O(2^n - 1) => O(2^n)
• Space = recursion depth O(n).
*/
