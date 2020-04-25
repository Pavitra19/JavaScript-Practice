/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

// method 1 
function modifyArray(nums) {
    return (nums.map(number => (number % 2 === 0) ? number * 2 : number * 3));
}

// method 2 
function modifyArray(nums) {
    nums.forEach((number, index) => {
        nums[index] = number * (2 + number % 2);
    })
    return (nums);
}
