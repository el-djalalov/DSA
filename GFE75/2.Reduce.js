Array.prototype.myReduce = function (callback, initialValue) {
	const arr = this;

	if (arr.length === 0 && !initialValue) {
		throw new TypeError("Reduce of empty array with no initial value");
	}
	let acc;
	let startIndex;

	if (initialValue !== undefined) {
		acc = initialValue;
		startIndex = 0;
	} else {
		acc = arr[0];
		startIndex = 1;
	}

	for (let i = startIndex; i < arr.length; i++) {
		if (i in arr) {
			acc = callback(acc, arr[i], i, arr);
		}
	}

	return acc;
};
