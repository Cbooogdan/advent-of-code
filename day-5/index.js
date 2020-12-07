/*
  Title: Day five
  URL for instrucitons: https://adventofcode.com/2020/day/5
*/

let array = global.loadInput().lines();
// let array = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
let puzzle1 = array.map(pass => {
  pass = pass.split('');
  let minRow = 0,
  maxRow = 127,
  minColumn = 0,
  maxColumn = 7;

  pass.forEach(character => {
    let midRow = Math.ceil((maxRow - minRow)/2);
    let midColumn = Math.ceil((maxColumn - minColumn)/2);
    switch (character) {
      case 'F':
        maxRow -= midRow;
        break;
      case 'B':
        minRow += midRow;
        break;
      case 'L':
        maxColumn -= midColumn;
        break;
      case 'R':
        minColumn += midColumn;
        break;
      default:
        break;
    }
  });
  return minRow * 8 + minColumn;
})
console.log(Math.max(...puzzle1));
//easy way: we can convert to 0 and 1, F and L to be 0, B and R to be 1, then convert the number, without 0's in front to base 10 (Ex: parseInt(1110111, 2) for 0001110111)

// Puzzle 2
let puzzle2 = puzzle1;
puzzle2 = puzzle2.sort( (a, b) => a-b );
for(let index = 1; index < puzzle2.length; index++) {
  if ((puzzle2[index - 1] + 1 != puzzle2[index])) {
    console.log(puzzle2[index - 1] + 1);
  }
}
