/*
  Title: Day three
  URL for instructions: https://adventofcode.com/2022/day/3
*/

let lines = global.loadInput().lines();

function getIntersection(a, b) {
  const elements = a.filter(element => b.includes(element));
  return [...new Set(elements)];
}

function calculatePriorities(char) {
  const charCode = char.charCodeAt(0);

  if (charCode >= 97 && charCode <= 122) {
    return Number(charCode - 96);
  }

  if (charCode >= 65 && charCode <= 90) {
    return Number(charCode - 38);
  }

  return 0;
}

// Puzzle 1
const puzzleOne = () => {
  const items = lines.map(line => {
    const firstHalf = [...line.slice(0, line.length / 2)];
    const secondHalf = [...line.slice(line.length / 2, line.length)];

    return getIntersection(firstHalf, secondHalf)[0];
  })

  return items.map(calculatePriorities).reduce((next, prev) => next + prev);
}

console.log(puzzleOne());

// Puzzle 2

const puzzleTwo = () => {
  let counter = 0;
  let groupValues = [];
  const foundItems = [];

  lines.forEach(line => {
    groupValues.push([...line]);
    counter++;

    if (counter > 2) {
      foundItems.push(
          getIntersection(
              getIntersection(groupValues[0], groupValues[1]),
              groupValues[2]
          )[0]
      );

      counter = 0;
      groupValues = [];
    }
  })

  return foundItems.map(calculatePriorities).reduce((next, prev) => next + prev);
}

console.log(puzzleTwo());
