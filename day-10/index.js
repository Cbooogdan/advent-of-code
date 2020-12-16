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
let arrangements = {};
function find(i) {
  if (arrangements[i]) return arrangements[i];
  if (i === input.length - 1) return 1;
  const currrent = input[i];
  const test1 = input[i + 1];
  const test2 = input[i + 2];
  const test3 = input[i + 3];
  let t = 0;
  if (test1 - currrent <= 3) t += find(i + 1);
  if (test2 - currrent <= 3) t += find(i + 2);
  if (test3 - currrent <= 3) t += find(i + 3);
  arrangements[i] = t;
  return t;
}
console.log(find(0));
