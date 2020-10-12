/**
 * @param {number[]} arr
 * @return {boolean}
 * Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference 
 * between any two consecutive elements is the same.
 * Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.
 * Leetcode 1502
 */
var canMakeArithmeticProgression = function (arr) {
    // If less than 3 elements, array can automatically be rearranged to form an arithmetic sequence 
    if (arr.length < 3) return true;

    // Sort the array
    var sortedArray = arr.sort((a, b) => a - b);

    // Determine difference between first two elements 
    const difference = sortedArray[1] - sortedArray[0];

    // Check if the difference between two consecutive elements is the same.
    for (var i = 2; i < sortedArray.length; i++) {

        // If the difference is different, return false as arithmetic sequence can't be formed
        if (sortedArray[i] - sortedArray[i - 1] !== difference) {
            return false
        }
    }
    return true
};