/**
 * @param {number[]} nums
 * @return {number[]}
 */

// method 1 
// for each element in the array, replace it with the sum of itself and the previous value
var runningSum = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};