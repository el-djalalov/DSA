/* Binary Tree Level Order Traversal
Given the root node of a binary tree, return an array of arrays, where each inner array represents the values of nodes at each level of the tree, traversed from left to right. */

interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

// Soltion 1 - Using recursion
function binaryTreeLevelOrderTraversal(root: TreeNode | null): number[][] {
	let levels: number[][] = [];

	function helper(node: TreeNode, level: number) {
		// if we're visiting a new level for the first time, add an empty array for that level
		if (levels.length === level) [levels.push([])];
		// Add the current node's value to the corresponding level array
		levels[level].push(node.val);
		// Recursively traverse the left subtree, if it exists, increment the level
		if (node.left) {
			helper(node.right!, level + 1);
		}
	}

	// Start the traversal from the root node at level 0
	if (root) {
		helper(root, 0);
	}

	return levels;
}
