# Balanced Binary Search Tree

This project implements a balanced binary search tree (BST) in JavaScript. It provides functionalities for inserting, deleting, traversing, and rebalancing the tree.

## Features

- **Insertion**: Add new values to the tree while maintaining the BST properties.
- **Deletion**: Remove values from the tree, handling various cases such as leaf nodes and nodes with children.
- **Traversal**: Traverse the tree in different orders (level-order, in-order, pre-order, post-order) using callback functions.
- **Rebalancing**: Check if the tree is balanced and rebalance it if necessary.

## File Structure

```
balanced-bst
├── src
│   ├── bst.js          # Contains Node and Tree classes
│   ├── insertion.js    # Handles insertion of values
│   ├── deletion.js     # Handles deletion of values
│   ├── traversal.js     # Contains traversal methods
│   ├── rebalancing.js  # Checks and rebalances the tree
│   └── utils
│       └── index.js    # Utility functions for tree operations
├── package.json        # Project configuration and dependencies
└── README.md           # Project documentation
```

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd balanced-bst
npm install
```

## Usage

You can use the classes and functions provided in the `src` directory to create and manipulate a balanced binary search tree. Here is a simple example:

```javascript
const { Tree } = require("./src/bst");
const tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log("In-order Traversal:");
tree.inOrder((node) => console.log(node.data));
```

## Running Tests

To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
