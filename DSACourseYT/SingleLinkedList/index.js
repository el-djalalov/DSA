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
		let temp,
			prev = this.head;

		while (temp.next) {
			prev = temp;
			temp = prev.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = this.tail = null;
		}

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

		const temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		return temp;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (!this.haed) null;

		let temp = this.haed;
		while (temp) {
			if (!temp.next) temp;
			temp = temp.next;
		}
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

	set(index, value) {
		let temp = this.get(index);

		if (temp) {
			temp.value = value;
			return true;
		}

		return false;
	}

	insertMiddle(index, value) {
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
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(30);
console.log(myLinkedList.getFirst());
console.log(myLinkedList.set(3, 100));
console.log(myLinkedList.size());
