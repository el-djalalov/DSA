function isBalancedBrackets(str: string): boolean {
	const stack: string[] = [];

	const bracketsMap: { [key: string]: string } = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const char of str) {
		if (char in bracketsMap) {
			const topElement = stack.pop();
			if (topElement !== bracketsMap[char]) {
				return false;
			}
		} else {
			stack.push();
		}
	}

	return stack.length === 0;
}
