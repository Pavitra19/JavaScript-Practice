/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * @param {number[]} nums
 * @return {number}
 */

// method 1
var findMaxConsecutiveOnes1 = function (nums) {
    var count = 0;
    var max = 0;

    for (var i = 0; i < nums.length; i++) {
        // increment count if number is 1
        if (nums[i] === 1) {
            count++;
        }
        // set count to 0 if number is 0
        else if (nums[i] !== 1) {
            count = 0;
        }
        // keep track of max consecutive ones
        max = Math.max(count, max);
    }

    return max;
};

// method 2

var findMaxConsecutiveOnes2 = function (nums) {
    // converts array to string
    // split string on 0, so strings are either empty or contain only 1s
    // Reverse sort so string with max number of 1s is first
    // return length of that string
    return nums.map(number => number.toString()).join('').split('0').sort().reverse()[0].length;
};

// simplified
var findMaxConsecutiveOnes3 = function (nums) {
    var max = 0;
    for (var i = 0, count = 0; i < nums.length; i++)
        max = Math.max(max, count = (nums[i] === 1 ? ++count : 0));
    return max;
}

findMaxConsecutiveOnes3([1, 0, 1, 1, 0, 1]);

