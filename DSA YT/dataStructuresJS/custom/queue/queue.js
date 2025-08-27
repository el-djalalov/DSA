/* Queue
The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).
The first element inserted into the queue is the first element to be removed.
A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
The Queue data structure supports two main operations:
Enqueue, which adds an element to the rear/tail of the collection.
Dequeue, which removes an element from the front/head of the collection.
Queue Usage
-Handling requests in web servers
-Print queues
-CPU Task scheduling
-Callack queue in JavaScript runtime */

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(elem) {
		this.items.push(elem);
	}
	dequeue(elem) {
		return this.items.shift(); // O(n)
	}

	isEmpty() {
		return this.items.length === 0;
	}
	peek() {
		if (this.isEmpty()) {
			return this.items[0];
		}
		return null;
	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}
}

/* const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue); */

// Optimized Queue with O(1) enqueue and dequeue

class OptimizedQueue {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(elem) {
		this.items[this.rear] = elem;
		this.rear++;
	}

	dequeue() {
		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}

	isEmpty() {
		return this.rear - this.front === 0;
	}

	peek() {
		return this.items[this.front];
	}

	size() {
		return this.rear - this.front;
	}

	print() {
		console.log(this.items);
	}
}

const optimizedQueue = new OptimizedQueue();
console.log(optimizedQueue.isEmpty());
optimizedQueue.enqueue(10);
optimizedQueue.enqueue(20);
optimizedQueue.enqueue(30);
optimizedQueue.enqueue(40);
console.log(optimizedQueue.size());
optimizedQueue.print();

console.log(optimizedQueue.dequeue());
console.log(optimizedQueue.peek());
