interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

export default function binaryTreeFlip(root: TreeNode | null): TreeNode | null {
	if (!root) return null;

	let left = root.left;
	let right = root.right;

	root.left = binaryTreeFlip(right);
	root.right = binaryTreeFlip(left);

	return root;
}
