/*
  Title: Day eight
  URL for instructions: https://adventofcode.com/2020/day/8
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
const puzzle1 = () => {
  let index = 0;
  let accumulator = 0;
  let executedInstructions = new Set();
  do {
    let [instruction, value] = input[index].split(' ');
    executedInstructions.add(index);
    switch (instruction) {
      case 'nop':
        index++;
        break;
      case 'acc':
        accumulator += parseInt(value);
        index++;
        break;
      case 'jmp':
        index += parseInt(value);
        break;
      default:
        break;
    }
  } while (!executedInstructions.has(index));
  return accumulator;
};
console.log(puzzle1());

// Puzzle 2
let inputs = [];
for (let i = 0; i < input.length; i++) {
  let [operation, argument] = input[i].split(' ');
  if (operation === 'jmp') {
    operation = 'nop';
  } else if (operation === 'nop') {
    operation = 'jmp';
  } else {
    continue;
  }
  inputs.push([...input.slice(0, i), `${operation} ${argument}`, ...input.slice(i + 1)]);
}

let programTerminatedAccumulator = 0;
const puzzle2 = (array) => {
  let index = 0;
  let accumulator = 0;
  let executedInstructions = new Set();
  do {
    if (!array[index]) {
      programTerminatedAccumulator = accumulator;
      break;
    }
    let [operation, argument] = array[index].split(' ');
    executedInstructions.add(index);
    switch (operation) {
      case 'nop':
        index++;
        break;
      case 'acc':
        accumulator += parseInt(argument);
        index++;
        break;
      case 'jmp':
        index += parseInt(argument);
        break;
      default:
        break;
    }
  } while (!executedInstructions.has(index));
};
inputs.forEach(modifiedInput => puzzle2(modifiedInput));
console.log(programTerminatedAccumulator);
