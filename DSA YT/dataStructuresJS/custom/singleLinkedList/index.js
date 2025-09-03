/* Linked List
A linked list is a linear data structure that includes a series of connected nodes.
Each node consists of a data value and a pointer that points to the next node.
The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
Random access of elements is not feasible, and accessing an element has linear time complexity.
The linked list data structure supports three main operations:
-Insertion - to add an element at the beginning, end, or at a given index in the list.
-Deletion - to remove an item given its index or value.
-Search - to find an element given its value. */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		if (value !== undefined) {
			const node = new Node(value);
			this.head = node;
			this.tail = node;
			this.length = 1;
		} else {
			this.head = this.tail = null;
			this.length = 0;
		}
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.head) return undefined;

		let temp = this.head;
		let prev = null;

		if (this.length === 1) {
			const poppedNode = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return poppedNode;
		}

		// Traverse the list to find the last node
		while (temp.next) {
			prev = temp;
			temp = temp.next;
		}

		this.tail = prev;
		this.tail.next = null;
		this.length--;
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) undefined;
		const temp = this.head; // store the current head
		this.head = this.head.next; // point head to the next node
		temp.next = null; // disconnected the pointer of the old head from the list
		this.length--;
		return temp;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (!this.head) return null;

		let temp = this.head;
		while (temp.next) {
			temp = temp.next;
		}
		return temp;
	}

	get(index) {
		let counter = 0;
		let temp = this.head;

		while (temp) {
			if (counter === index) return temp;
			counter++;
			temp = temp.next;
		}
		return null;
	}

	setValue(index, value) {
		let temp = this.get(index);

		if (temp) {
			temp.value = value;
			return true;
		}

		return false;
	}

	insertNode(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);

		const newNode = new Node(value);
		const temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return true;
	}

	size() {
		let counter = 0;
		let temp = this.head;
		while (temp) {
			counter++;
			temp = temp.next;
		}

		return counter;
	}

	clearAll() {
		this.head = null;
	}

	reverse() {
		if (this.length <= 1) return this;
		let prev = null;
		let current = this.head;

		let originalHead = this.head;

		// For every node in the list we do 4 operations.
		while (current) {
			let next = current.next; // 1. create var called "next" and set this to the next node
			current.next = prev; // 2. current node next pointer will be pointed to the prev which is null initially
			prev = current; // 3. we will then move prev var to the current node
			current = next; // 4. and last, we move current var to next
		}

		this.head = prev;
		this.tail = originalHead;
		return this;
	}
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.pop();
console.log(myLinkedList);
console.log(myLinkedList.getLast());
