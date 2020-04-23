// method 1 

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var pairs = 0;
    objects.map((object) => {
        if (object.x === object.y) {
            pairs++
        }
    });
    return pairs;
}

// method 2

function getCount(objects) {

    return (objects.filter(object => object.x === object.y).length);
}
