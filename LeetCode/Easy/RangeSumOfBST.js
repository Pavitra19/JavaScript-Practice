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
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 * Leetcode 938
 */
// Runtime: 228 ms (faster than 69.62%), Memory Usage: 68.2 MB (less than 52.31%)
// Time: O(n), space: O(n)
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  if (!root) return sum;
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  if (low < root.val) {
    sum += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }
  return sum;
};

// Runtime: 232 ms (faster than 57.09%), Memory Usage: 68 MB (less than 59.18%)
// Time: O(n), space: O(n)
var rangeSumBST2 = function (root, low, high) {
  let sum = 0;
  var checkValue = function (node) {
    if (!node) return;
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    if (low < node.val) checkValue(node.left); // left branch has values inside the range
    if (node.val < high) checkValue(node.right); // right branch has values inside the range
  };
  checkValue(root);
  return sum;
};

// Runtime: 208 ms (faster than 99.01%), Memory Usage: 68.6 MB (less than 11.10%)
// Time: O(n), space: O(n)
var rangeSumBST3 = function (root, low, high) {
  let sum = 0;
  // function to traverse through nodes
  var checkValue = function (node) {
    if (!node) return;
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    checkValue(node.left);
    checkValue(node.right);
  };
  checkValue(root);
  return sum;
};
