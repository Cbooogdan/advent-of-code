/*
  Title: Day two
  URL for instructions: https://adventofcode.com/2022/day/2
*/

let lines = global.loadInput().lines();

const opponentOptions = ['A', 'B', 'C'];
const myOptions = ['X', 'Y', 'Z'];

// Puzzle 1
const puzzleOne = () => {
  const winningFormat = ['CX', 'AY', 'BZ'];

  return  lines.map(line => {
    const [opponent, me] = line.split(' ');
    const pointForShape = myOptions.indexOf(me) + 1;

    if (myOptions.indexOf(me) === opponentOptions.indexOf(opponent)) {
      return 3 + pointForShape;
    }

    if (winningFormat.includes(`${opponent}${me}`)) {
      return 6 + pointForShape;
    } else {
      return pointForShape;
    }
  });
}

console.log(puzzleOne().reduce((prev, next) => prev + next));

// Puzzle 2
const puzzleTwo = () => {
  const winningFormat = new Map([
      ['C', 'X'],
      ['A', 'Y'],
      ['B', 'Z']
  ]);
  const loosingFormat = new Map([
    ['B', 'X'],
    ['C', 'Y'],
    ['A', 'Z']
  ]);

  return  lines.map(line => {
    const [opponent, typeEnds] = line.split(' ');

    switch (typeEnds) {
      case 'X':
        return myOptions.indexOf(loosingFormat.get(opponent)) + 1;
      case 'Y':
        return 3 + opponentOptions.indexOf(opponent) + 1;
      case 'Z':
        return 6 + myOptions.indexOf(winningFormat.get(opponent)) + 1;
    }
  });
}

console.log(puzzleTwo().reduce((prev, next) => prev + next));
