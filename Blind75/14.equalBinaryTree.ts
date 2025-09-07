/* Given the root nodes of two binary trees, a and b, determine whether the two trees are equal.
Two binary trees are considered equal if they have the same structure and the corresponding nodes in both trees have the same values. The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes. */
interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

export default function binaryTreeEqual(
	a: TreeNode | null,
	b: TreeNode | null
): boolean {
	if (!a && !b) return true;
	if (a === null || b === null) return false;
	if (a.val !== b.val) return false;

	return binaryTreeEqual(a.left, b.left);
}
