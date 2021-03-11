/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var position = m + n - 1;
    n--;
    while (n >= 0) {
        // insert nums from nums2 into back of nums1 since its all 0s
        nums1[position] = nums2[n];
        n--;
        position--;
    }
    // sort array
    return (nums1.sort((a, b) => a - b));
};