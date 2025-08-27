/* Array
An array is a data structure that can hold a collection of values.
Arrays can contain a mix of different data types. You can store strings, booleans, numbers, or even objects all in the same array.
Arrays are resizable. You don't have to declare the size of an array before creating it.
JavaScript arrays are zero-indexed and the insertion order is maintained.
Arrays are iterable. They can be used with a for of loop. */

const arr = [1, 2, 3, "string"];
arr.push(4); // to add an item to the last
arr.unshift(0); // to add an item to the first
arr.pop(); // delete item from the last
arr.shift(); // delete item from the first
for (const item of arr) {
	console.log(item);
}

// Common methods
// map, filter, reduce, concat, slice, splice

// Time comlexity
// Insert / remove from end - O(1)
// Insert / remove from beginning - O(n)
// Access - O(1)
// Search - O(n)
// Push/Pop - O(1)
// Shift/unshift/concat/ slice/splice - O(n)
// forEach/map/filter/reduce - O(n)
