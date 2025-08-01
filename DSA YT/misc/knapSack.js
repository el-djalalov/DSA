const map = new Map([
	[1, 2],
	[2, 4],
	[4, 8],
]);

const mapKeys = Array.from(map.keys());
const mapValues = Array.from(map.values());

console.log(mapKeys);
console.log(mapValues);
