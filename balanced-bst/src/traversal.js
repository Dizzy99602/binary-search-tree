export function levelOrder(callback) {
  if (!this.root) return;
  const queue = [this.root];
  while (queue.length) {
    const node = queue.shift();
    callback(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

export function inOrder(callback) {
  function traverse(node) {
    if (node) {
      traverse(node.left);
      callback(node.data);
      traverse(node.right);
    }
  }
  traverse(this.root);
}

export function preOrder(callback) {
  function traverse(node) {
    if (node) {
      callback(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(this.root);
}

export function postOrder(callback) {
  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      callback(node.data);
    }
  }
  traverse(this.root);
}
