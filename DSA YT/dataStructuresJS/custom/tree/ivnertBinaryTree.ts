interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}
function invertBinaryTree(root: TreeNode | null): TreeNode | null {
	if (!root) return null;

	let left = root.left;
	let right = root.right;

	root.left = invertBinaryTree(right);
	root.right = invertBinaryTree(left);
	return root;
}
