/**
 * @param {string} s
 * @return {number}
 * Given a string s consists of some words separated by spaces, return the length of the last word in the string.
 * If the last word does not exist, return 0.
 * A word is a maximal substring consisting of non-space characters only.
 * Leetcode 58
 */

// Runtime: 72 ms (faster than 92.50%), Memory Usage: 38.6 MB (less than 60.30%)
var lengthOfLastWord = function (s) {
  s = s.split(" ").filter((word) => word); // split words, filter out any spaces
  return s.length > 0 ? s[s.length - 1].length : 0; // if empty string, return 0, else return length of last word
};
