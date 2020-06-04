// calculating factorial 

// method 1 
const factorial = (n) => {
    return (n === 0 ? 1 : n * factorial(n - 1));
}

// method 2
function fact(n) {
    var factorial = 1;
    while (n > 0) {
        factorial = n * factorial;
        n--;
    }
    console.log(factorial);
}
