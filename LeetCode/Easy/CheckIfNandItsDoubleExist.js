/**
 * @param {number[]} arr
 * @return {boolean}
 * Given an array arr of integers, check if there exists two integers N and M 
 * such that N is the double of M ( i.e. N = 2 * M).
 * Leetcode 1346
 */

// Method 1
// Runtime: 84 ms
// Memory: 38.7 MB
var checkIfExist = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var double = 2 * arr[i];
        // In the case of 0, where 0 * 2 = 0, check if the index of
        // double is different from i
        if (arr.includes(double) && arr.indexOf(double) !== i) {
            return true;
        }
    }
    return false;
};

// Method 2
// Run Time: 72 ms
// Memory: 40.5 MB
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    // Set will remove any duplicate values, such as multiple 0s
    var numbers = new Set(arr);
    for (var i = 0; i < arr.length; i++) {
        // In the case of 0, where 0 * 2 = 0, only one 0 will be in the set
        // check if the index of double is different from i
        var double = 2 * arr[i];
        if (numbers.has(double) && arr[i] !== 0 ||
            arr[i] === 0 && arr.indexOf(0) !== i) {
            return true;
        }
    }
    return false;
};