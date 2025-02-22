export function isBalanced(node) {
    if (!node) return true;

    const height = (n) => {
        if (!n) return -1;
        return Math.max(height(n.left), height(n.right)) + 1;
    };

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        isBalanced(node.left) &&
        isBalanced(node.right)
    );
}

export function rebalance(tree) {
    const nodes = [];
    
    const inOrderTraversal = (node) => {
        if (node) {
            inOrderTraversal(node.left);
            nodes.push(node.data);
            inOrderTraversal(node.right);
        }
    };

    inOrderTraversal(tree.root);
    
    const buildBalancedTree = (array) => {
        if (array.length === 0) return null;
        const mid = Math.floor(array.length / 2);
        const node = new Node(array[mid]);
        node.left = buildBalancedTree(array.slice(0, mid));
        node.right = buildBalancedTree(array.slice(mid + 1));
        return node;
    };

    tree.root = buildBalancedTree(nodes);
}