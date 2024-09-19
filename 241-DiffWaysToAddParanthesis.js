/**
 * @param {string} expression
 * @return {number[]}
 */

const diffWaysToCompute = expression => {
	const memo = new Map();

	function compute(start, end) {
		const key = `${start},${end}`;
		if (memo.has(key)) return memo.get(key);

		const results = [];
		let num = 0;
		let hasOperator = false;

		for (let i = start; i < end; i++) {
			const char = expression[i];
			if (char >= "0" && char <= "9") {
				num = num * 10 + parseInt(char);
			} else {
				hasOperator = true;
				const left = compute(start, i);
				const right = compute(i + 1, end);

				for (const l of left) {
					for (const r of right) {
						if (char === "+") results.push(l + r);
						else if (char === "-") results.push(l - r);
						else if (char === "*") results.push(l * r);
					}
				}
				num = 0; // Reset num for next potential number
			}
		}

		if (!hasOperator) {
			results.push(num);
		}

		memo.set(key, results);
		return results;
	}

	return compute(0, expression.length);
};

diffWaysToCompute("2-1-1"); // [0, 2]
