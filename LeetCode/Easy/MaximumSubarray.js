/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    var sum = 0;
    var max = nums[0];

    for (var i = 0; i < nums.length; i++) {
        // Add nums[i] to existing sum or start new sum
        sum = Math.max(sum + nums[i], nums[i]);

        // max sum 
        max = Math.max(sum, max);
    }

    return max;
};