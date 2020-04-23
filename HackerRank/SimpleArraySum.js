// method 1
function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    console.log(sum);
}

// method 2
function oneLineArraySum(ar) {
    console.log(ar.reduce((a, b) => a + b));
}

simpleArraySum([1, 2, 3, 4]);
oneLineArraySum([1, 2, 3, 4]);
