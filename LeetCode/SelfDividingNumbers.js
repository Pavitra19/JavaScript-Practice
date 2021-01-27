/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * A self-dividing number is a number that is divisible by every digit it contains.
 * Given a lower and upper number bound, output a list of every possible self dividing number,
 * including the bounds if possible.
 * Leetcode 728
 */

// Runtime: 76 ms (faster than 96.12%), Memory Usage: 40.7 MB (less than 55.34 %)
var selfDividingNumbers = function (left, right) {
  var nums = [];
  for (var i = left; i <= right; i++) {
    var num = i.toString().split("");
    for (var n = 0; n < num.length; n++) {
      if (i % num[n] !== 0) {
        break;
      } else if (n === num.length - 1) {
        nums.push(i);
      }
    }
  }
  return nums;
};
