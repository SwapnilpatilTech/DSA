// ===============================
// Node Definition
// ===============================
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// ===============================
// Binary Tree Class
// ===============================
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // ===============================
  // 1. Inorder Traversal (Recursive)
  // ===============================
  inorderRecursive(node = this.root, result = []) {
    if (node) {
      this.inorderRecursive(node.left, result);
      result.push(node.data);
      this.inorderRecursive(node.right, result);
    }
    return result;
  }

  // ===============================
  // 1. Inorder Traversal (Iterative)
  // ===============================
  inorderIterative() {
    let stack = [];
    let curr = this.root;
    let result = [];

    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      result.push(curr.data);
      curr = curr.right;
    }

    return result;
  }

  // ===============================
  // 2. Preorder Traversal
  // ===============================
  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.data);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  // ===============================
  // 3. Postorder Traversal
  // ===============================
  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.data);
    }
    return result;
  }

  // ===============================
  // 4. Height of Tree
  // ===============================
  height(node = this.root) {
    if (!node) return 0;

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // ===============================
  // 5. Check if Balanced
  // ===============================
  isBalanced(node = this.root) {
    function check(node) {
      if (!node) return 0;

      let left = check(node.left);
      if (left === -1) return -1;

      let right = check(node.right);
      if (right === -1) return -1;

      if (Math.abs(left - right) > 1) return -1;

      return Math.max(left, right) + 1;
    }

    return check(node) !== -1;
  }
}


// ===============================
// TESTING
// ===============================

// Create Tree manually
let tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);


// Inorder
console.log("Inorder Recursive:", tree.inorderRecursive());
console.log("Inorder Iterative:", tree.inorderIterative());
console.log("----------------------------------");

// Preorder
console.log("Preorder:", tree.preorder());
console.log("----------------------------------");

// Postorder
console.log("Postorder:", tree.postorder());
console.log("----------------------------------");

// Height
console.log("Height of Tree:", tree.height());
console.log("----------------------------------");

// Balanced Check
console.log("Is Balanced:", tree.isBalanced());
console.log("----------------------------------");