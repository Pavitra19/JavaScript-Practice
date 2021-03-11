/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let difference = ('' + n).split('').reduce((a, b) => {
        // ++ to add the strings and not concatenate them
        return [a[0] * b, a[1] + +b];
    }, [1, 0]);
    return difference[0] - difference[1];

};