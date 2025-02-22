function deleteItem(root, value) {
    if (!root) {
        return root;
    }

    if (value < root.data) {
        root.left = deleteItem(root.left, value);
    } else if (value > root.data) {
        root.right = deleteItem(root.right, value);
    } else {
        // Node with only one child or no child
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }

        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.data = minValueNode(root.right).data;

        // Delete the inorder successor
        root.right = deleteItem(root.right, root.data);
    }
    return root;
}

function minValueNode(node) {
    let current = node;
    while (current && current.left) {
        current = current.left;
    }
    return current;
}

export { deleteItem };