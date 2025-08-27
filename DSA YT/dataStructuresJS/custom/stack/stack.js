/* Stack
The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO).
The last element inserted into the stack is the first element to be removed.
A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
The Stack data structure supports two main operations:
Push, which adds an element to the collection
Pop, which removes the most recently added element from the collection. 
Stack Usage
-Browser history tracking
-Undo operation when typing
-Expression conversions
-Call stack in JavaScript runtime */

class Stack {
	constructor() {
		this.items = [];
	}

	// Push an element onto the stack
	push(element) {
		this.items.push(element);
	}

	// Pop an element from the stack
	pop() {
		if (this.isEmpty()) return null;
		return this.items.pop();
	}

	// Peek at the top element of the stack
	peek() {
		if (this.isEmpty()) return null;
		return this.items[this.items.length - 1];
	}

	// Check if the stack is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Get the size of the stack
	size() {
		return this.items.length;
	}

	// Clear the stack
	clear() {
		this.items = [];
	}
}

let stack2 = [];

// Push to stack
stack2.push(10);
stack2.push(20);
console.log(stack2[stack2.length - 1]); // Peek (20)
console.log(stack2.pop()); // Pop (20)
console.log(stack2.length); // Size (1)

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.size()); // 1
