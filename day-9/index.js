/*
  Title: Day nine
  URL for instructions: https://adventofcode.com/2020/day/9
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
const isSumOfTwo = (arr, target) => {
  let numbersObject = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    numbersObject[currentNumber] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (numbersObject.hasOwnProperty(difference) && numbersObject[difference] !== i) {
      return true;
    }
  }
  return false;
}
const puzzle1 = () => {
  for( let i = 25; i < input.length; i++) {
    let preamble = input.slice(i - 25, i);
    if (!isSumOfTwo(preamble, input[i])) {
      return input[i];
    }
  }
};
console.log(puzzle1());

// Puzzle 2

