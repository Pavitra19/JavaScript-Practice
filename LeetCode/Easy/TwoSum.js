/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const arr = {};

    for (i = 0; i < nums.length; i++) {
        const diffOfNums = target - nums[i];

        if (diffOfNums in arr) {
            return [arr[diffOfNums], i];

        }

        arr[nums[i]] = i;
    }
}