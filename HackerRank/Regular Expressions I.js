'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {

    // ^ = first item matches 
    // () = capturing group 
    // [] one of the characters in the brackets 
    // . matches any character
    // \1 = matches to previously stored match
    // $ = to ensure matched item is at the end of the sequence 

    var re = /^([aeiou]).*\1$/;

    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}