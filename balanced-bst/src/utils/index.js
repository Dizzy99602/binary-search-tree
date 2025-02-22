export function buildTree(array) {
    if (!array.length) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = buildTree(array.slice(0, mid));
    node.right = buildTree(array.slice(mid + 1));

    return node;
}

export function prettyPrint(node, prefix = '', isLeft = true) {
    if (node) {
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.data);
        prettyPrint(node.left, prefix + (isLeft ? '│   ' : '    '), true);
        prettyPrint(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    }
}