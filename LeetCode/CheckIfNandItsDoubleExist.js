/**
 * @param {number[]} arr
 * @return {boolean}
 * Given an array arr of integers, check if there exists two integers N and M 
 * such that N is the double of M ( i.e. N = 2 * M).
 * Leetcode 1346
 */
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