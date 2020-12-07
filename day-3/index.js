/*
  Title: Day three
  URL for instrucitons: https://adventofcode.com/2020/day/3
*/

let array = global.loadInput().lines();
// let array = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
let step = 0;
let counterTrees = 0;
for(let i = 1; i < array.length; i++) {
  step = (step + 3) % 31; //31 symbols per row
  let symbols = array[i].split('');
  if (symbols[step] == '#') counterTrees ++;
}
console.log(counterTrees);

// Puzzle 2
const countTrees = (right, down) => {
  let step = 0;
  let counterTrees = 0;
  for(let i = down; i < array.length; i += down) {
    step = (step + right) % 31; //31 symbols per row
    let symbols = array[i].split('');
    if (symbols[step] == '#') counterTrees ++;
  }
  return counterTrees;
}
let multiply = countTrees(1, 1) * countTrees(3, 1) * countTrees(5, 1) * countTrees(7, 1) * countTrees(1, 2);
console.log(multiply);