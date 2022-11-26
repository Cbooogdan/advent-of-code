/*
  Title: Day fifteen
  URL for instructions: https://adventofcode.com/2020/day/15
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');
// input = input.map(element => [...element]);

// Puzzle 1
// 0,3,6,0,3,3,1,0,4,0

const values = new Map();
let counterSteps = 0;
let lastElement = null;

input.forEach(element => {
  const elements = element.split(',');
  elements.map(element => Number(element)).forEach((element, index) => {
    counterSteps++;
    lastElement = element;
    if (elements.length - 1 !== index) {
      values.set(element, index);
    }
  });
});

while(counterSteps <= 29999999) {
  if (values.has(lastElement)) {
    const lastIndex = values.get(lastElement);
    values.set(lastElement, counterSteps - 1);
    lastElement = counterSteps - lastIndex - 1;
  } else {
    values.set(lastElement, counterSteps - 1);
    lastElement = 0;
  }
  counterSteps++;
}

console.log(lastElement);

// Puzzle 2
// Same as above
