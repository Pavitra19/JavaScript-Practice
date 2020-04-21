var twoSum = function (nums, target) {

    for (i = 0; i < nums.length - 1; i++) {
        sumOfNums = nums[i] + nums[i + 1]
        if (sumOfNums === target) {
            return [i, i + 1]
        } else {
            console.log("Sum not in array");
        }
    };
};

twoSum([2, 7, 11, 15], 9)
