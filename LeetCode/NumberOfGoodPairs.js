/**
 * @param {number[]} nums
 * @return {number}
 * Given an array of integers nums.
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * Return the number of good pairs.
 * 
 * Leetcode 1512
 */

// Method 1: Time complexity: O(nlogn), space complexity: O(1)
// Runtime: 72 ms (92.23% faster), Memory Usage: 38.2 MB (less than 89.99%)
var numIdenticalPairs = function (nums) {
    nums.sort(); // (nlogn)
    let count = 0, i = 0;
    for (let j = 1; j < nums.length; j++) { // time complexity O(n)
        if (nums[j] == nums[i]) {
            count += j - i; // update counter with number of prev occurances 
        } else {
            i = j; // update i
        }
    }
    return count;
};

// Method 2: Time complexity: O(n), space complexity: O(n)
// Runtime: 76 ms (78.94% faster), Memory usage: 38.1 MB (less than 93.40% of submissions)
var numIdenticalPairs2 = function (nums) {
    let numMaps = new Map(); // initialize map
    let count = 0; // initialize number of good pairs
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        if (numMaps[currentNumber]) {
            // if number exists in map, increment count and update value by 1
            count += numMaps[currentNumber]; // keeping track of frequency
            numMaps[currentNumber]++;
        } else {
            // if number doesn't exist in map, add the key into map with value of 1
            numMaps[currentNumber] = 1;
        }
    }
    return count; // return number of good pairs
};

// Method 3: Time complexity: O(n^2), space complexity: O(1)
// Runtime: 76 ms (78.94% faster), Memory usage: 38.7 MB (less than 20.96% of submissions)
var numIdenticalPairs3 = function (nums) {
    let numPairs = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) numPairs++;
        }
    }
    return numPairs;
};