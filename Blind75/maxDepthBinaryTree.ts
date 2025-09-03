interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

function binaryTreeMaxDepth(root: TreeNode | null): number {
	if (!root) return 0;

	return (
		1 + Math.max(binaryTreeMaxDepth(root.left), binaryTreeMaxDepth(root.right))
	);
}

// Another solution with BFS
function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;
	let depth = 0;
	let queue = [root];
	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let current = queue.shift();
			if (current?.left) queue.push(current.left);
			if (current?.right) queue.push(current.right);
		}
		depth++;
	}
	return depth;
}
