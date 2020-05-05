/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // add elements into one array, and sort from highest to lowest
    nums1 = nums1.concat(nums2).sort((a, b) => a - b);
    var middleVal = Math.ceil(nums1.length / 2);
    return (nums1.length % 2 === 0 ?
        (nums1[middleVal - 1] + nums1[(middleVal)]) / 2 : nums1[middleVal - 1]);
};