interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

class Node implements TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(
		val: number,
		left: TreeNode | null = null,
		right: TreeNode | null = null
	) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

function dfsInOrder(root: TreeNode) {
	let res: number[] = [];
	function traverse(node: TreeNode) {
		if (node.left) traverse(node.left);
		if (node?.val) res.push(node.val);
		if (node.right) traverse(node.right);
	}
	traverse(root);
	return res;
}

export default function kthSmallestElementInBST(
	root: TreeNode,
	k: number
): number {
	let inOrder = dfsInOrder(root);
	console.log(inOrder);

	return inOrder[k - 1];
}

let root: TreeNode = new Node(10);
root.left = new Node(6);
root.right = new Node(11);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.left.left.left = new Node(2);

console.log(kthSmallestElementInBST(root, 3));
