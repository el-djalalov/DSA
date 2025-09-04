/* Binary Search Tree (BST)
-Insertion order of nodes in a Binary Search Tree (BST) affects its structure and efficiency.
-A balanced BST ensures optimal performance for search, insertion, and deletion operations.
-Unbalanced trees can lead to degraded performance, resembling a linked list in the worst case.
-A balanced BST maintains a height of O(log n), while an unbalanced tree can have a height of O(n).
-Rotations (left and right) are used to maintain balance in self-balancing trees like AVL and Red-Black Trees.
-Overall there are 4 types of rotations:
-1. Right-Right Rotation (Single) RR
-2. Left-Left Rotation (Single) LL
-3. Left-Right Rotation (Double) LR
-4. Right-Left Rotation (Double) RL
*/

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let temp = this.root;

		while (true) {
			if (newNode.value === temp.value) {
				return undefined;
			}

			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				} else {
					temp = temp.left;
				}
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					return this;
				} else {
					temp = temp.right;
				}
			}
		}
	}

	includes(value) {
		if (!this.root) {
			return false;
		}
		let temp = this.root;
		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value > temp.value) {
				temp = temp.right;
			} else if (value === temp.value) {
				return true;
			}
		}
		return false;
	}

	bfs() {
		// Breadth First Search

		let current = this.root;
		let queue = [];
		let data = [];

		queue.push(current);

		while (queue.length) {
			current = queue.shift();
			data.push(current.value);

			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}

		return data;
	}

	dfsPreOrder(node = this.root, data = []) {
		if (node === null) return data;
		data.push(node.value);

		if (node.left) this.dfsPreOrder(node.left, data);
		if (node.right) this.dfsPreOrder(node.right, data);
		return data;
	}

	dfsPostOrder(node = this.root, data = []) {
		if (node === null) return data;

		if (node.left) this.dfsPostOrder(node.left, data);
		if (node.right) this.dfsPostOrder(node.right, data);
		data.push(node.value);

		return data;
	}

	dfsInOrder(node = this.root, data = []) {
		if (node === null) return data;
		if (node.left) this.dfsInOrder(node.left, data);
		data.push(node.value);
		if (node.right) this.dfsInOrder(node.right, data);

		return data;
	}
}

const tree = new BST();
console.log(tree);

tree.insert(5);
tree.insert(7);
tree.insert(6);
tree.insert(8);
tree.insert(2);
tree.insert(10);
tree.insert(4);

console.log(tree);
console.log(tree.includes(7));
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
