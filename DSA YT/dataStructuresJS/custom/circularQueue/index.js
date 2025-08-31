/* Circular Queue
The size of the queue is fixed, and a single block of memory is used as if the first element is connected to the last element.
Also referred to as a circular buffer or ring buffer, it follows the FIFO principle.
A circular queue will reuse the empty block created during the dequeue operation.
When working with queues of fixed maximum size, a circular queue is a great implementation choice.
The Circular Queue data structure supports two main operations:
Enqueue, which adds an element to the rear/tail of the collection.
Dequeue, which removes an element from the front/head of the collection.
Use cases:
-Clock
-Streaming data
-Traffic lights */

class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.currLength = 0;
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return this.currLength === this.capacity;
	}

	isEmpty() {
		return this.currLength === 0;
	}

	enqueue(elem) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity; // from index -1 to 1
			this.items[this.rear] = elem; // insert index to the index 1
			this.currLength++; // increment current length
			if (this.front === -1) {
				this.front = this.rear; // point front to the same index as rear
			}
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return 0;
		}
		const item = this.items[this.front]; // get the item to be dequeued
		this.items[this.front] = null; // delete the space of the item to be dequeued
		this.front = (this.front + 1) % this.capacity; //
		this.currLength--;
		if (this.isEmpty()) {
			// for future use case
			this.front = -1;
			this.rear = -1;
		}
		return item;
	}

	peek() {
		if (!this.isEmpty()) {
			return this.items[this.front];
		}
		return null;
	}

	print() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
		} else {
			let i,
				str = "";
			for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
				str += this.items[i] + " ";
			}
			str += this.items[i];
			console.log(str);
		}
	}
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
console.log(queue.isFull());

queue.print();
