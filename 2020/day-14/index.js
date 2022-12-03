/*
  Title: Day fourteen
  URL for instructions: https://adventofcode.com/2020/day/14
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');
// input = input.map(element => [...element]);

// Puzzle 1
let mask = '';
let memory = new Map();

input.forEach(line => {
  line = line.split(' = ');
  const firstSequence = line[0];
  let value = line[1];
  if (firstSequence === 'mask') {
    mask = value;
    return;
  }

  value = parseInt(value).toString(2);

  const memoryAddress = firstSequence.substr(4, firstSequence.length - 5);
  memory.set(memoryAddress, '');

  for(let index = 1; index <= 36; index++) {
    const charMask = mask.substr(-index, 1);
    let charValue = value.substr(-index, 1);
    charValue = index > value.length ? '0' : charValue;

    const valueInBinary = (charMask !== 'X' ? charMask : charValue) + memory.get(memoryAddress);
    memory.set(memoryAddress, parseInt(valueInBinary, 2));
  }
});

const resultPuzzle1 = Array.from(memory.values()).reduce((prevElement, nextElement) => prevElement + nextElement);

// Puzzle 2
mask = '';
memory = new Map();

input.forEach((line, index) => {
  line = line.split(' = ');
  const firstSequence = line[0];
  let value = line[1];
  if (firstSequence === 'mask') {
    mask = value;
    return;
  }

  let memoryAddress = firstSequence.substr(4, firstSequence.length - 5);
  memoryAddress = parseInt(memoryAddress).toString(2);

  let floatingValue = '';
  for(let index = 1; index <= 36; index++) {
    const charMask = mask.substr(-index, 1);
    let charAddress = memoryAddress.substr(-index, 1);
    charAddress = index > memoryAddress.length ? '0' : charAddress;

    floatingValue = (charMask !== '0' ? charMask : charAddress) + floatingValue;
  }

  let memoryAddressesBinary = [floatingValue];
  const numberOfCharX = (floatingValue.match(/X/g) || []).length;
  let numberOfCombinations = Math.pow(2, numberOfCharX);

  while (memoryAddressesBinary.length < numberOfCombinations) {

    const originalValues = [...memoryAddressesBinary];
    memoryAddressesBinary = [];

    originalValues.forEach(value => {
      memoryAddressesBinary.push(value.replace('X', '0'));
      memoryAddressesBinary.push(value.replace('X', '1'));
    })
  }

  memoryAddressesBinary.forEach(address => {
    memory.set(parseInt(address, 2), parseInt(value));
  });
});

const resultPuzzle2 = Array.from(memory.values()).reduce((prevElement, nextElement) => prevElement + nextElement);

console.log(resultPuzzle2);


