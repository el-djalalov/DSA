interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

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

// Different approach
function maxDepth2(root: TreeNode | null): number {
	if (!root) return 0;

	return 1 + Math.max(maxDepth2(root.left), maxDepth2(root.right));
}
