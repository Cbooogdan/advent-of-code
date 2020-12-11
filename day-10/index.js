/*
  Title: Day ten
  URL for instructions: https://adventofcode.com/2020/day/10
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');
input = input.map((jolt => parseInt(jolt))).sort( (a,b ) => a - b );
input = [0, ...input, input[input.length-1] + 3];

// Puzzle 1
let differencesCounter = [0, 0, 0]; // 1st for diff of 1 and so on
for (let index = 1; index < input.length; index++ ) {
  let diff = input[index] - input[index - 1];
  differencesCounter[diff-1] += 1;
};
console.log(differencesCounter[0] * differencesCounter[2]);

// Puzzle 2
let setOfArrangements = new Set();
setOfArrangements.add(input);
do {
  setOfArrangements.forEach(function(value) {
    console.log('1');
    return;
  });
  return;
  console.log('2');
} while (false);
console.log(differencesCounter[0] * differencesCounter[2]);