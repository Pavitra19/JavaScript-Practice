/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * Leetcode 1470
 */

// method 1
// Runtime: 80 ms, memory usage: 40.7 MB
var shuffle = function (nums, n) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(nums[i]); // add x values
        newArray.push(nums[i + n]); // add y values
    }
    return newArray;
};

// method 2 
// Runtime: 92 ms, memory usage: 40.5 MB
var shuffle2 = function (nums, n) {
    let xArray = nums.slice(0, n); // creare an array with x values
    let yArray = nums.slice(n); // create an array with y values
    let newArray = []; // initialize new array for x and y values
    for (let i = 0; i < yArray.length; i++) {
        // iterate through x and y arrays adding each element to new array
        newArray.push(xArray[i]);
        newArray.push(yArray[i]);
    }
    return newArray;
};