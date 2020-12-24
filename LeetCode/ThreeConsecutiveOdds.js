/**
 * @param {number[]} arr
 * @return {boolean}
 * Given an integer array arr, return true if there are three consecutive odd numbers in the array.
 * Otherwise, return false.
 * Leetcode 1550
 */

// Runtime: 80 ms (faster than 40.73%), Memory Usage: 38.7 MB (less than 37.42%)
var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) return false;
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
      return true;
  }
  return false;
};
