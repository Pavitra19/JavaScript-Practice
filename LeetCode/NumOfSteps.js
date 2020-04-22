/**
 * Given a non-negative integer num, return the number of steps to reduce it to zero.
 * @param {number} num
 * @return {number}
 * 
 */
var numberOfSteps = function (num) {

    var ans = 0;

    while (num > 0) {
        ans++;
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
    }
    return ans;
};