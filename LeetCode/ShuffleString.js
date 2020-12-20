/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 *
 * Given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i]
 * in the shuffled string.
 * Return the shuffled string.
 * Leetcode 1528
 */

// Runtime: 76 ms (faster than 98.49%), Memory Usage: 40.7 MB (less than 23.94%)
var restoreString = function (s, indices) {
  let shuffledStr = [];
  for (let i = 0; i < indices.length; i++) {
    shuffledStr[indices[i]] = s[i]; // iterate through indices, and add the correct letter to the new array
  }
  return shuffledStr.join("");
};
