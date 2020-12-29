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

// Runtime: 208 ms (faster than 99.01%), Memory Usage: 68.6 MB (less than 11.10%)
// Time: O(n), space: O(n)
var rangeSumBST = function (root, low, high) {
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
