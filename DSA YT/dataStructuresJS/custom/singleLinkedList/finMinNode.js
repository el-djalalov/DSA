class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.first = newNode;
		this.last = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = this.last = newNode;
		}
		this.last.next = newNode;
		this.last = newNode;

		this.length++;
	}

	min() {
		let current = this.first;
		let minValue = current.value;

		while (current.next) {
			current = current.next;
			if (current.value < minValue) {
				minValue = current.value;
			}
		}
		return minValue;
	}
}

let theStack = new Stack(0);

theStack.push(1);
theStack.push(2);
theStack.push(3);
theStack.push(4);
console.log(theStack.min());
