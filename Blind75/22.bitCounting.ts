function countBits_naive(n: number): number[] {
	const ans: number[] = [];

	for (let i = 0; i <= n; i++) {
		let count = 0;
		let num = i;

		while (num > 0) {
			num = num & (num - 1);
			count++;
		}
		ans.push(count);
	}
	return ans;
}

function countBits(n: number): number[] {
	const dp: number[] = new Array(n + 1).fill(0);

	for (let i = 1; i <= n; i++) {
		dp[i] = dp[i >> 1] + (i & 1);
	}

	return dp;
}

function countBits_dp_optimized(n: number): number[] {
	const ans: number[] = new Array(n + 1).fill(0);
	let offset = 1;
	for (let i = 1; i <= n; i++) {
		if (i === offset * 2) {
			offset = i;
		}
		ans[i] = 1 + ans[i - offset];
	}

	return ans;
}

function countBits3(n: number): number[] {
	if (n) {
		const count = n.toString(2).match(/1/g)?.length ?? 0;
		return [count];
	}

	return [0];
}

console.log(countBits3(35));
