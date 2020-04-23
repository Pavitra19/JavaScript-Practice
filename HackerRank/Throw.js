function isPositive(a) {

    var message = '';

    try {
        if (a > 0) message = 'YES';
        if (a === 0) message = 'Zero Error';
        if (a < 0) message = 'Negative Error';
    }
    catch (err) {
        throw err;
    }

    return message;
}


// method 2 

function isPositive(a) {
    if (a > 0) return 'YES';
    else {
        throw (a === 0 ? Error('Zero Error') : Error('Negative Error'));
    }
}