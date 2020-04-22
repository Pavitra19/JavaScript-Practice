'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

console.log('Input number');
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();

    console.log("Program ended");
});

function readLine() {
    return inputString[currentLine++];
}

const factorial = (n) => {
    return (n === 0 ? 1 : n * factorial(n - 1));
}

function main() {
    const n = +(readLine());
    console.log(factorial(n));
}
