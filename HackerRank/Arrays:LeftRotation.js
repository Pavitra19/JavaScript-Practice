/* 
Given an array a of n integers and a number,d , perform d left rotations on the array. 
Return the updated array to be printed as a single line of space-separated integers.
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* method 1
While d > 0, remove first element at index 0, and push that element onto the end of the array
*/
function rotLeft(a, d) {
    while (d > 0) {
        a.push(a.splice(0, 1)[0]);
        d--;
    }
    return a;
}

/* method 2
spread operator to create an array with elements from the first splice until the d'th position,
followed by elements of the second splice 
*/
function rotLeft2(a, d) {
    return [...a.slice(d), ...a.slice(0, d)]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
