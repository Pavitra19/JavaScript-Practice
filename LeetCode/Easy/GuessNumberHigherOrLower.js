/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guessNumber = function (n) {

    var upper_index = n;
    var lower_index = 1;

    while (result !== 0) {
        var midpoint = Math.floor((upper_index + lower_index) / 2);
        var result = guess(midpoint);

        if (result === 1) {
            lower_index = midpoint + 1;
        } else if (result === -1) {
            upper_index = midpoint - 1;
        }

    }

    return midpoint;

};