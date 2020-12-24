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

function changeDirectionWaypoint(action, value) {
  let sign = action == 'L' ? '-' : '+';
  angle = (angle + parseInt(sign + value)) % 360;
  angle < 0 ? angle += 360 : null;

  if (action == 'L') {
    if (angle == 0) action = 'N';
    if (angle == 90) action = 'E';
    if (angle == 180) action = 'S';
    if (angle == 270) action = 'W';
  }
  if (action == 'R') {
    if (angle == 0) action = 'N';
    if (angle == 90) [directionWaypointX, directionWaypointY] = [-directionWaypointY, directionWaypointX];
    if (angle == 180) action = 'S';
    if (angle == 270) action = 'W';
  }

  if (angle == 0 || angle == 180) {

  };
  if (angle == 90 || angle == 270) {

  };
}

// Puzzle 1
input.forEach(instruction => {
  let [ action, value ] = [ instruction.substring(0, 1), parseInt(instruction.substring(1)) ];
  if ( action == 'L' || action == 'R') changeDirection(action, value);
  else increaseDirection(value, action);
})
console.log(Math.abs(directionX) + Math.abs(directionY));

// Puzzle 2 -> 42073
console.log('--------------------puzzle 2---------------');
let cardinalValues = [0, 0, 0, 0]; // N, E, S, W
let direction = [0, 1];
let index = 1;
let directionWaypointY = 1; // North/South Waypoint
let directionWaypointX = 10; // East/West Waypoint

input.forEach(instruction => {
  let [ action, value ] = [ instruction.substring(0, 1), parseInt(instruction.substring(1)) ];
  if (action == 'F') {
    direction.forEach(element => {
      switch (element) {
        case 0:
          cardinalValues[element] += (value * directionWaypointY);
          break;
        case 1:
          cardinalValues[element] += (value * directionWaypointX);
          break;
        case 2:
          cardinalValues[element] -= (value * directionWaypointY);
          break;
        case 3:
          cardinalValues[element] -= (value * directionWaypointX);
          break;
        default:
          break;
      }
    })
  }
  if (action == 'E') directionWaypointX += value;
  if (action == 'W') directionWaypointX -= value;
  if (action == 'N') directionWaypointY += value;
  if (action == 'S') directionWaypointY -= value;
  if (action == 'R') {
    // console.log(directionWaypointY, directionWaypointX);
    direction = direction.map(element => {
      element += value / 90;
      if (element < 0) {
        return element += 4;
      }
      if (element > 3) {
        return element -= 4;
      }
      return element;
    });
    if (value == 180) {
      [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointY) * -1, Math.abs(directionWaypointX) * -1];
    } else {
      switch (direction[0]) {
        case 0:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * 1, Math.abs(directionWaypointY) * 1];
          break;
        case 1:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * -1, Math.abs(directionWaypointY) * 1];
            break;
        case 2:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * -1, Math.abs(directionWaypointY) * -1];
          break;
        case 3:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * 1, Math.abs(directionWaypointY) * -1];
          break;
        default:
          break;
      }
    }
  }
  if (action == 'L') {
    direction = direction.map(element => {
      element -= value / 90;
      return element < 0 ? element += 4 : element;
    });
    if (value == 180) {
      [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointY) * -1, Math.abs(directionWaypointX) * -1];
    } else {
      switch (direction[0]) {
        case 0:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * 1, Math.abs(directionWaypointY) * 1];
          break;
        case 1:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * -1, Math.abs(directionWaypointY) * 1];
            break;
        case 2:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * -1, Math.abs(directionWaypointY) * -1];
          break;
        case 3:
          [directionWaypointY, directionWaypointX] = [Math.abs(directionWaypointX) * 1, Math.abs(directionWaypointY) * -1];
          break;
        default:
          break;
      }
    }
  }
  // console.log(directionWaypointY, directionWaypointX);
  // console.log(cardinalValues);
  // console.log(direction);
  // console.log('------');
})
// console.log(directionWaypointY, directionWaypointX);
// console.log(cardinalValues);
// console.log(direction);
// console.log('------');
console.log(Math.abs(cardinalValues[0] - cardinalValues[2]) + Math.abs(cardinalValues[1] - cardinalValues[3]));
