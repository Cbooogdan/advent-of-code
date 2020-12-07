/*
  Title: Day one
  URL for instrucitons: https://adventofcode.com/2020/day/1
*/

let array = global.loadInput().lines();
// let array = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
const twoSum = (arr, target) => {
  let numbersObject = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    numbersObject[currentNumber] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (numbersObject.hasOwnProperty(difference) && numbersObject[difference] !== i) {
      return array[i] * array[numbersObject[difference]];
    }
  }
}
console.log(twoSum(array, 2020));

// Puzzle 2
const threeSum = (arr, target) => {
  for (let j = 0; j < arr.length; j++) {
    let numbersObject = {};
    for (let i = j+1; i < arr.length; i++) {
      let currentNumber = arr[i];
      numbersObject[currentNumber] = i;
    }
    for (let i = 0; i < arr.length; i++) {
      let difference = target - arr[j] - arr[i];
      if (numbersObject.hasOwnProperty(difference) && numbersObject[difference] !== i) {
        return array[i] * array[j] * array[numbersObject[difference]];
      }
    }
  }
}
console.log(threeSum(array, 2020));