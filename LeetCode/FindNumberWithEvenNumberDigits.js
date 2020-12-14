/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * Leetcode 1295
 */

// Method 1, filter and return number of integers with even number of digits
// Runtime: 80 ms (faster than 76.44%), Memory Usage: 39.4 MB (less than 52.88%)
var findNumbers = function (nums) {
    return nums.filter(num => num.toString().length % 2 === 0).length;
};

// Method 2, divide each number by 10 again and again to get the number of digits
// Runtime: 80 ms (76.47% faster), Memory Usage: 40.7 MB (12.49% less)
var findNumbers2 = function (nums) {
    let totalEvenNums = 0;
    for (let i = 0; i < nums.length; i++) {
        let numDigits = 1; // each integer has at least one digit
        while (nums[i] / 10 >= 1) {
            nums[i] = nums[i] / 10;
            numDigits++;
        }
        if (numDigits % 2 === 0) totalEvenNums++; // increase total when even number of digits
    }
    return totalEvenNums;
};

// Method 3,iterate through numbers and increase count if number of digits is even
// Runtime: 84 ms (51.37 % faster), Memory Usage: 39.2 MB (65.05% less)
var findNumbers3 = function (nums) {
    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) count++;
    }
    return count;
};