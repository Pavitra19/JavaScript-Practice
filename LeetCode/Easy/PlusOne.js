/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        // if carrying over isn't needed
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            // set to 0 if digits[i] = 9
            // carry over
            digits[i] = 0;
        }
    }
    // if array is all 9s 
    digits.unshift(1);
    return digits;
};