/**
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array 
 * that occurs more than 25% of the time. Return that integer.
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    // window size is 25% of arr length
    var value = Math.floor(0.25 * arr.length);
    // iterate until end of window
    for (var i = 0; i < arr.length - value; i++) {
        // if number at beginning of the window and end are the same, it occurs more than 25%
        if (arr[i] === arr[i + value]) {
            return arr[i];
        }
    }
    // if no number found
    return -1
};