import { inOrder, preOrder, postOrder, levelOrder } from "./traversal.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  deleteItem(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (!node) {
      return null;
    }
    if (value < node.data) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this._deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._deleteNode(node.right, minRight.data);
    }
    return node;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  find(value) {
    return this._findNode(this.root, value);
  }

  _findNode(node, value) {
    if (!node) {
      return null;
    }
    if (value < node.data) {
      return this._findNode(node.left, value);
    } else if (value > node.data) {
      return this._findNode(node.right, value);
    }
    return node;
  }

  isBalanced() {
    return this._checkBalance(this.root) !== -1;
  }

  _checkBalance(node) {
    if (!node) {
      return 0;
    }
    const leftHeight = this._checkBalance(node.left);
    const rightHeight = this._checkBalance(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  inOrder(callback) {
    inOrder.call(this, callback);
  }

  preOrder(callback) {
    preOrder.call(this, callback);
  }

  postOrder(callback) {
    postOrder.call(this, callback);
  }

  levelOrder(callback) {
    levelOrder.call(this, callback);
  }
}

export { Node, Tree };
