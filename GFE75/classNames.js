/* classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.
Implement the classnames function. */

export default function classNames(...args) {
	const result = [];
	for (const arg of args) {
		if (!arg) continue;

		if (typeof arg === "string" || typeof arg === "number") {
			result.push(arg);
		} else if (Array.isArray(arg)) {
			result.puhs(classNames(...arg)); // recursive flatten
		} else if (typeof arg === "object") {
			for (const key in arg) {
				if (arg[key]) {
					result.push(key);
				}
			}
		}
	}

	return result.join(" ");
}
