// ---------------- Throttle ----------------
function Throttle(fn, delay) {
	let shouldTrottle = false;

	return function (...args) {
		if (shouldTrottle) return;

		shouldTrottle = true;
		setTimeout(() => {
			shouldTrottle = false;
		}, delay);

		fn.apply(this, args);
	};
}

// ---------------- EXAMPLES ----------------

// Example 1: Call many times in a loop (synchronously)
console.log("=== Example 1: Loop calls ===");
const throttled1 = Throttle(msg => {
	console.log("Executed:", msg, "at", Date.now());
}, 1000);

for (let i = 0; i < 5; i++) {
	throttled1("loop call " + i);
}
// -> Only "loop call 0" runs
// -> Others are ignored because they happen before 1 second passes

// Example 2: Call repeatedly with delay
console.log("\n=== Example 2: Interval calls ===");
const throttled2 = Throttle(msg => {
	console.log("Executed:", msg, "at", Date.now());
}, 1000);

let count = 0;
const interval = setInterval(() => {
	throttled2("interval call " + count);
	count++;
	if (count > 5) clearInterval(interval);
}, 300);

// -> Calls happen every 300ms
// -> But only once per second is allowed
