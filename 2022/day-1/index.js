/*
  Title: Day one
  URL for instructions: https://adventofcode.com/2022/day/1
*/

let blocks = global.loadInput().blocks();

// Puzzle 1
const puzzle = () => {
  return blocks.map(block => Number(
    block.split('\n')
      .reduce((prev, next) => Number(prev) + Number(next)))
  );
}

// console.log(Math.max(...puzzle()));

// Puzzle 2
const sortedValues = puzzle().sort((a, b) => b - a);

console.log(sortedValues[0] + sortedValues[1] + sortedValues[2]);
