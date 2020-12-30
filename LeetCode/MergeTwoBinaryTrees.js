/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * Given two binary trees and imagine that when you put one of them to cover the other,
 * some nodes of the two trees are overlapped while the others are not. You need to merge them into a new binary tree.
 * The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
 * Otherwise, the NOT null node will be used as the node of new tree.
 * Leetcode 617
 */

// Runtime: 116 ms (faster than 62.83%), Memory Usage: 46.1 MB (less than 68.59%)
var mergeTrees = function (t1, t2) {
  if (!t2) return t1; // if t2 is null, t1 will be used as the node
  if (!t1) return t2; // if t1 is null, t2 will be used as the node
  t1.val += t2.val; // if neither are null, new node is the sum of the two nodes
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
