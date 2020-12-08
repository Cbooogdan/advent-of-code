/*
  Title: Day seven
  URL for instructions: https://adventofcode.com/2020/day/7
*/

let input = global.loadInput().lines();
// let input = document.querySelector('pre').textContent.trim().split('\n');

// Puzzle 1
let colorMap = [];
input.forEach(line => {
  let [primary, contents] = line.split(' bags contain ');
  primary = primary.split(' ').join('-');
  if (contents === 'no other bags.') {
    colorMap[primary] = [];
    return;
  }
  if (colorMap[primary] == undefined) colorMap[primary] = [];
  let secondaryColors = contents.matchAll(/[0-9]{1} (.*?) (bags|bag)/g);
  for (const color of secondaryColors) {
    let colorCode = color[1].split(' ').join('-');
    colorMap[primary].push(colorCode);
  }
});

let counterShinyGold = 0;
for (let color in colorMap) {
  let tempCounter = 0;
  const recursively = (array) => {
    array.forEach( element => {
      if (colorMap[element].length == 0) {
        return tempCounter;
      }
      if (element === 'shiny-gold') {
        return tempCounter++;
      } else {
        return recursively(colorMap[element]);
      }
    });
  };
  recursively(colorMap[color])
  if (tempCounter > 0) counterShinyGold++;
}
console.log(counterShinyGold);

// Puzzle 2
colorMap = new Map();
input.forEach(line => {
  let [primary, contents] = line.split(' bags contain ');
  primary = primary.split(' ').join('-');
  if (contents === 'no other bags.') {
    colorMap.set(primary, {});
    return;
  }
  if (colorMap[primary] == undefined) colorMap.set(primary, {});;
  let secondaryColors = contents.matchAll(/[0-9]{1} (.*?) (bags|bag)/g);
  let tempBags = {};
  for (const color of secondaryColors) {
    let colorCode = color[1].split(' ').join('-');
    let number = color[0].split(' ')[0];
    tempBags[colorCode] = number;
  }
  colorMap.set(primary, tempBags);
  return;
});

let bagsFound = 0;
function search(from, mult = 1) {
  const element = colorMap.get(from);
  if (!element) return;
  for (const key of Object.keys(element)) {
    bagsFound += element[key] * mult;
    search(key, mult * element[key]);
  }
}
search('shiny-gold');
console.log(bagsFound);