/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // set will remove any duplicates
    return (new Set(nums).size < nums.length);
};