/**
 * @param {number} x
 * @return {boolean}
 *
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */

// Runtime: 388 ms, faster than 5.03% of JavaScript online submissions
// Memory Usage: 49.4 MB, less than 13.64 % of JavaScript online submissions
var isPalindrome = function (x) {
  x = x.toString();
  xReversed = x.split("").reverse().join("");
  return xReversed === x;
};
