/*
  Title: Day twelve
  URL for instructions: https://adventofcode.com/2020/day/10
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');

let angle = 90;
let directionX = 0; // East/West
let directionY = 0; // North/South

function increaseDirection(value, action) {
  if (action == 'F') {
    if (angle == 0) action = 'N';
    if (angle == 90) action = 'E';
    if (angle == 180) action = 'S';
    if (angle == 270) action = 'W';
  }
  if (action == 'E') directionX += value;
  if (action == 'W') directionX -= value;
  if (action == 'N') directionY += value;
  if (action == 'S') directionY -= value;
}

function changeDirection(action, value) {
  let sign = action == 'L' ? '-' : '+';
  angle = (angle + parseInt(sign + value)) % 360;
  angle < 0 ? angle += 360 : null;
}

// Puzzle 1
input.forEach(instruction => {
  let [ action, value ] = [ instruction.substring(0, 1), parseInt(instruction.substring(1)) ];
  if ( action == 'L' || action == 'R') changeDirection(action, value);
  else increaseDirection(value, action);
})
console.log(Math.abs(directionX) + Math.abs(directionY));


// Puzzle 2
