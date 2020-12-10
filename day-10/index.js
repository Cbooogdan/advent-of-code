/*
  Title: Day ten
  URL for instructions: https://adventofcode.com/2020/day/10
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
input = input.map((jolt => parseInt(jolt))).sort( (a,b ) => a - b );
input = [0, ...input];
differencesCounter = [0, 0, 0]; // 1st for diff of 1 and so on
for (let index = 1; index < input.length; index++ ) {
  let diff = input[index] - input[index - 1];
  differencesCounter[diff-1] += 1;
};
differencesCounter[2] += 1;
console.log(differencesCounter[0] * differencesCounter[2]);

// Puzzle 2
