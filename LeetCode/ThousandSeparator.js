/**
 * @param {number} n
 * @return {string}
 * Given an integer n, add a dot (".") as the thousands separator and return it in string format.
 */

// Runtime: 76 ms (faster than 73.57%). Memory Usage: 38.5 MB (less than 69.29%)
var thousandSeparator = function (n) {
  var str = n.toString(); // convert to string
  var strLen = str.length;
  if (strLen <= 3) return str; //if number is less than 1000, no separator needed
  /* start backwards and insert a separator after every three digits
   * rejoin number with the digits after the slice. String length increases as separators are added
   * slice starts at i and goes to strLen + i (which indicates how many digits are after the separator)
   * + 1(since indices start at 0) */
  for (var i = strLen - 3; i >= 0; i -= 3) {
    if (i !== 0) {
      str = str.slice(0, i) + "." + str.slice(i, strLen + i + 1);
    }
  }
  return str;
};
