/* Balanced Binary Tree
- binary tree where for every node, the heights of the left and right subtrees differ by at most one. */

interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

function isBalanced(root: TreeNode | null): boolean {
	function check(node: TreeNode | null): number {
		if (!node) return 0;
		const left = check(node.left);
		if (left === -1) return -1;
		const right = check(node.right);
		if (right === -1) return -1;
		if (Math.abs(left - right) > 1) return -1;
		return Math.max(left, right) + 1;
	}
	return check(root) !== -1;
}
