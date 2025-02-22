const { Tree } = require("./src/bst");
const tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In-order Traversal:");
tree.inOrder((data) => console.log(data));
