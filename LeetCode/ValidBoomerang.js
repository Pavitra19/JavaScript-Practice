// A boomerang is a set of 3 points that are all distinct and not in a straight line.
// Given a list of three points in the plane, return whether these points are a boomerang.
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    // calculate area of triangle given the points
    // if the area is 0, the points are collinear, hence they lie in a straight line and don't form a triangle

    var ax = points[0][0];
    var ay = points[0][1];
    var bx = points[1][0];
    var by = points[1][1];
    var cx = points[2][0];
    var cy = points[2][1];

    var area = Math.abs(ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    return (area > 0 ? true : false);
};