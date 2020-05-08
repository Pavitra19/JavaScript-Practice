/**
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * @param {number} x
 * @return {number}
 */

// method 1
var mySqrt = function (x) {
    return (parseInt(Math.sqrt(x)));
};

// method 2 
var mySqrt2 = function (x) {
    // sqrt of x must be in [1, x/2 +1]
    var left = 1;
    var right = Math.floor(x / 2 + 1);
    var mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid > x) {
            right = mid - 1;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    // no sqrt found, sqrt must be bw [num - 1, num], while is broken when right = num - 1 
    return right;
};