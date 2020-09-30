/**
 * @param {number} n
 * @return {number}
 * 
 * You have a total of n coins that you want to form in a staircase shape, 
 * where every k-th row must have exactly k coins. Given n, find the total 
 * number of full staircase rows that can be formed.
 * n is a non-negative integer and fits within the range of a 32-bit 
 * signed integer.
 * 
 * Leetcode 441
 */

// Run time: 108 ms
// Memory: 40.1 MB
var arrangeCoins = function (n) {
    var stairs = 0;
    while (stairs < n) {
        stairs++;
        n = n - stairs;
    }
    return stairs;
};