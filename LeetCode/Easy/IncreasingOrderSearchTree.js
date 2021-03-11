/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree
 * is now the root of the tree, and every node has no left child and only one right child.
 * Leetcode 897
 */

//Runtime: 68 ms (faster than 98.34%), Memory Usage: 39.w MB (less than 33.91%)
var increasingBST = function (root) {
  let newTree = new TreeNode();
  let node = newTree;

  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    node.right = root;
    node = node.right;
    node.left = null;
    traverse(root.right);
  }

  traverse(root);
  return newTree.right;
};

//Runtime: 72 ms (faster than 93.45%), Memory Usage: 39.3 MB (less than 18.08%)
var increasingBST2 = function (root) {
  let sortedNodes = [];
  function traverse(node) {
    if (node === null) return null;
    traverse(node.left);
    sortedNodes.push(node.val);
    traverse(node.right);
  }

  function buildTree() {
    let tempNode = new TreeNode();
    let current = tempNode;
    for (let i = 0; i < sortedNodes.length; i++) {
      current.right = new TreeNode(sortedNodes[i]);
      current = current.right;
    }
    return tempNode.right;
  }
  traverse(root);
  return buildTree();
};

//Runtime: 76 ms (faster than 80.85%), Memory Usage: 39.4 MB (less than 14.18%)
var increasingBST3 = function (root) {
  let sortedNodes = [];
  function traverse(node) {
    if (node === null) return null;
    sortedNodes.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  sortedNodes.sort((a, b) => a - b); // sort the nodes in ascending order
  function buildTree() {
    let tempNode = new TreeNode();
    let current = tempNode;
    for (let i = 0; i < sortedNodes.length; i++) {
      current.right = new TreeNode(sortedNodes[i]); // add node to tree based on order
      current = current.right;
    }
    return tempNode.right;
  }
  return buildTree();
};
