/*
  Title: Day eleven
  URL for instructions: https://adventofcode.com/2020/day/11
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');
input = input.map(element => [...element]);
let newInput = [];
for (let column = 0; column < input.length; column++) {
  newInput.push([...input[column]]);
}

const applyRules = (callback, minSeats) => {
  for (let column = 0; column < input.length; column++) {
    for (let row = 0; row < input[column].length; row++) {
      if (input[column][row] == '.') continue;
      let seats = callback(column, row);
      
      if (input[column][row] == 'L' && seats == 0) {
        newInput[column][row] = '#';
        continue;
      }
      if (input[column][row] == '#' && seats >= minSeats) {
        newInput[column][row] = 'L';
        continue;
      }
    }
  }
}

function getAdiacentSeats(column, row) {
  let counterOccupiedSeats = 0;
  if (input[column] != undefined && input[column][row - 1] != undefined && input[column][row - 1] == '#') counterOccupiedSeats += 1;
  if (input[column + 1] != undefined && input[column + 1][row - 1] != undefined && input[column + 1][row - 1] == '#') counterOccupiedSeats += 1;
  if (input[column + 1] != undefined && input[column + 1][row] != undefined && input[column + 1][row] == '#') counterOccupiedSeats += 1;
  if (input[column + 1] != undefined && input[column + 1][row + 1] != undefined && input[column + 1][row + 1] == '#') counterOccupiedSeats += 1;
  if (input[column] != undefined && input[column][row + 1] != undefined && input[column][row + 1] == '#') counterOccupiedSeats += 1;
  if (input[column - 1] != undefined && input[column - 1][row + 1] != undefined && input[column - 1][row + 1] == '#') counterOccupiedSeats += 1;
  if (input[column - 1] != undefined && input[column - 1][row] != undefined && input[column - 1][row] == '#') counterOccupiedSeats += 1;
  if (input[column - 1] != undefined && input[column - 1][row - 1] != undefined && input[column - 1][row - 1] == '#') counterOccupiedSeats += 1;
  return counterOccupiedSeats;
}

function getAdiacentSeatsExtended(column, row) {
  let counterOccupiedSeats = 0;

  let indexColumn = column;
  let indexRow = row - 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexRow -= 1;
  }

  indexColumn = column + 1;
  indexRow = row - 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn += 1;
    indexRow -= 1;
  }

  indexColumn = column + 1;
  indexRow = row;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn += 1;
  }

  indexColumn = column + 1;
  indexRow = row + 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn += 1;
    indexRow += 1;
  }

  indexColumn = column;
  indexRow = row + 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexRow += 1;
  }

  indexColumn = column - 1;
  indexRow = row + 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn -= 1;
    indexRow += 1;
  }

  indexColumn = column - 1;
  indexRow = row;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn -= 1;
  }

  indexColumn = column - 1;
  indexRow = row - 1;
  while (input[indexColumn] != undefined && input[indexColumn][indexRow] != undefined) {
    if (input[indexColumn][indexRow] == '#') {
      counterOccupiedSeats += 1;
      break;
    }
    if (input[indexColumn][indexRow] == 'L') {
      break;
    }
    indexColumn -= 1;
    indexRow -= 1;
  }

  return counterOccupiedSeats;
}

// Puzzle 1
// make this true in order to get 1st puzzle solution
while (true) {
  applyRules(getAdiacentSeats, 4);

  if(JSON.stringify(input) == JSON.stringify(newInput)) {
    let occupiedSeats = 0;
    for (let column = 0; column < newInput.length; column++) {
      occupiedSeats += newInput[column].join('').split('#').length - 1;
    }
    console.log(occupiedSeats);
    break;
  }

  input = newInput;
  newInput = [];
  for (let column = 0; column < input.length; column++) {
    newInput.push([...input[column]]);
  }
}

// Puzzle 2
while (false) {
  applyRules(getAdiacentSeatsExtended, 5);

  if(JSON.stringify(input) == JSON.stringify(newInput)) {
    let occupiedSeats = 0;
    for (let column = 0; column < newInput.length; column++) {
      occupiedSeats += newInput[column].join('').split('#').length - 1;
    }
    console.log(occupiedSeats);
    break;
  }

  input = newInput;
  newInput = [];
  for (let column = 0; column < input.length; column++) {
    newInput.push([...input[column]]);
  }
}