/* Object
An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type, whereas the value can be of any data type.
To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.
An object is not an iterable. You cannot use it with a for of loop. */
const obj = {
	name: "John",
	age: 25,
	Key3: true,
	sayMyName: function () {
		console.log(this.name);
	},
};

obj.hobby = "tennis";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj);
obj.sayMyName();

// Common Methods
// Objects.keys() .values() .entries()

/*
Time complexity
Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Oject.keys - O(n)
Oject.values - O(n)
Oject.entries - O(n)
*/
