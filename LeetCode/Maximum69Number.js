/**
 * @param {number} num
 * @return {number}
 *
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 * Leetcode 1323
 */

// Runtime: 64 ms (faster than 99.66%), Memory Usage: 38.9 MB (less than 6.59%)
var maximum69Number = function (num) {
  return num.toString().replace("6", "9"); // convert to string, then replace first occurance of 6
};

// Runtime: 80 ms (aster than 62.16%), Memory Usage: 38.7 MB (less than 44.26%)
var maximum69Number = function (num) {
  let nums = [...num.toString()];
  if (!nums.includes("6")) return nums.join("");
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 6) {
      nums[i] = "9";
      count += 1;
    }
    if (count === 1) return nums.join("");
  }
};
