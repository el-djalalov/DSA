function climbingStairs(n) {
	const noOfWays = [1, 2];

	for (let i = 2; i <= n; i++) {
		noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
	}
	return noOfWays[n - 1];
}

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));
console.log(climbingStairs(5));
