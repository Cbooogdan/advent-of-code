/*
  Title: Day six
  URL for instructions: https://adventofcode.com/2020/day/6
*/

let array = global.loadInput().blocks();
// let array = document.querySelector('pre').textContent.trim().split('\n\n');

// Puzzle 1
let puzzle1 = array.map(element => {
  element = element.split('\n').join('').split('');
  return [...new Set(element)].length;
}).reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(puzzle1);

// Puzzle 2
let puzzle2 = array.map(element => {
  element = element.split('\n');
  if (element.length > 1) {
    let firstPerson = element[0].split('');
    element.shift();
    let restPersons = element;
    let commonQuestions = firstPerson.filter( question => {
      return restPersons.every( value => value.includes(question));
    });
    return commonQuestions.length;
  } else {
    return [...new Set(element.join('').split(''))].length;
  }
}).reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(puzzle2);
