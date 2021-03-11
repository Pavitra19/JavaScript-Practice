/**
 * Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    // .filter(Boolean) to remove all falsy (false, null, undefined, 0, NaN or an empty string) items out
    return (s.split(' ').filter(Boolean).length);
};