/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 * On a broken calculator that has a number showing on its display, we can perform two operations:
 * Double: Multiply the number on the display by 2, or;
 * Decrement: Subtract 1 from the number on the display.
 * Initially, the calculator is displaying the number X.
 * Return the minimum number of operations needed to display the number Y.
 *
 * Leetcode 991
 */

// Runtime: 68 ms (faster than 100.00%), Memory Usage: 38.4 MB (less than 66.67%)
var brokenCalc = function (X, Y) {
  var count = 0;
  while (Y > X) {
    count++;
    if (Y % 2 === 0) {
      Y = Y / 2;
    } else {
      Y++;
    }
  }

  if (X > Y) count += X - Y;
  return count;
};
