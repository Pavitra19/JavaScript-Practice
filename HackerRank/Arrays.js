function getSecondLargest(nums) {

    // remove repeating numbers
    nums = [...new Set(nums)];

    // sort from lowest to highest
    const sortedArray = nums.sort(function (a, b) { return a - b });

    // get second highest value
    const getSecondLargest = sortedArray.slice(-2)[0];
    console.log(getSecondLargest);

}
