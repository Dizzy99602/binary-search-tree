function insert(value, tree) {
    const newNode = new Node(value);
    
    if (!tree.root) {
        tree.root = newNode;
        return;
    }

    let current = tree.root;
    let parent;

    while (true) {
        parent = current;

        if (value < current.data) {
            current = current.left;
            if (!current) {
                parent.left = newNode;
                return;
            }
        } else {
            current = current.right;
            if (!current) {
                parent.right = newNode;
                return;
            }
        }
    }
}

export { insert };