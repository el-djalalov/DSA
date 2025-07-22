class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) return undefined;

		let temp = this.tail; // Node to be removed
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}
		this.length--;
		return temp; // return removed node
	}

	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}

		const temp = this.head;
		this.head = this.head.next;
		this.head.prev = null;
		temp.next = null;
		this.length++;
		return temp;
	}
}

let myDoublyLinkedList = new DoublyLinkedList(0);

myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.unshift(100);

console.log(myDoublyLinkedList);
