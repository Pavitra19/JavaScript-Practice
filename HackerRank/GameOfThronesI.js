"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 *
 * Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to lock
 * the single door through which the enemy can enter his kingdom.
 * But, to lock the door he needs a key that is an anagram of a palindrome.
 * He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.
 * Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.
 */

function gameOfThrones(s) {
  // Write your code here
  let letters = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]]++;
    }
  }

  Object.values(letters).forEach((key) => {
    if (key % 2 !== 0) {
      count++;
    }
  });

  return count < 2 ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = gameOfThrones(s);

  ws.write(result + "\n");

  ws.end();
}
