/**
 * @param {number[]} nums
 * @return {number[]}
 */

// method 1 

var smallerNumbersThanCurrent = function (nums) {
    var sorted = [...nums].sort((a, b) => a - b);
    return (nums.map(num => sorted.indexOf(num)));
};

// method 2
var smallerNumbersThanCurrent = function (nums) {
    var countSmaller = [];
    for (var i = 0; i < nums.length; i++) {
        var numsSmaller = nums.filter(num => nums[i] > num).length;
        countSmaller.push(numsSmaller);
    }
    return countSmaller;
};