/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 * Given an integer n and an integer start.
 * Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
 * Return the bitwise XOR of all elements of nums.
 * Leetcode 1486
 */

// Runtime: 80 ms (faster than 45.87%), Memory Usage: 38.8 MB (less than 14.26%)
var xorOperation = function (n, start) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i;
  }
  return nums.reduce((a, b) => a ^ b); // reduce executes a function for each value of the array, returning a single value
};
