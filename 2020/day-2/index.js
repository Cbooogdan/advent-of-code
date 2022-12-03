/*
  Title: Day two
  URL for instructions: https://adventofcode.com/2020/day/2
*/

let array = global.loadInput().lines();
// let array = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
let puzzle1 = array.filter(element => {
  let splitAfterSpace = element.split(' ');
  let [min, max] = splitAfterSpace[0].split('-');
  let letter = splitAfterSpace[1].split(':')[0];
  let password = splitAfterSpace[2];
  let count = password.split(letter).length-1;
  if (count <= parseInt(max) && count >= parseInt(min)) return true;
  return false;
});
console.log(puzzle1.length);

// Puzzle 2
let puzzle2 = array.filter(element => {
  let splitAfterSpace = element.split(' ');
  let [min, max] = splitAfterSpace[0].split('-');
  let letter = splitAfterSpace[1].split(':')[0];
  let password = splitAfterSpace[2].split('');
  let [first, second] = [parseInt(min) - 1, parseInt(max) - 1];
  let mark = false;
  if( password[first] == letter) {
    mark = true;
  }
  if (password[second] == letter) {
    if (mark) return false;
    mark = true;
  }
  return mark;
});
console.log(puzzle2.length);