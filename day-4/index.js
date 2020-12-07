/*
  Title: Day four
  URL for instrucitons: https://adventofcode.com/2020/day/4
*/

let array = global.loadInput().blocks();
// let array = document.querySelector('pre').textContent.trim().split('\n\n');

// Puzzle 1
let puzzle1 = array.filter(passport => {
  passport = passport.replace(/\n/g, ' ');
  let passportElements = passport.split(' ').length;
  hasCid = passport.search('(?:cid:)');
  if (hasCid < 0 && passportElements == 7) return true;
  if (passportElements == 8) return true;
  return false;
});
console.log(puzzle1.length);

// Puzzle 2
let puzzle2 = array.filter(passport => {
  passport = passport.replace(/\n/g, ' ');
  let passportElements = passport.split(' ').length;
  hasCid = passport.search('(?:cid:)');
  let mark = false;
  if (hasCid < 0 && passportElements == 7) mark = true;
  if (passportElements == 8) mark = true;
  if (mark) {
    passport = passport.replace(/(?:\s?cid:[^ ]*)/g, '').trim().split(' ');
    passport = passport.sort().map(element => {
      return element.split(':')[1];
    });
    let [birthYear, eyeColor, expirationYear, hairColor, height, issueYear, passportId] = passport;
    let heightType = height.search('cm') > 0 ? 'cm' : 'in';
    heigth = heightType == 'cm' ? height.split('cm')[0] : height.split('in')[0];
    height = parseInt(height);
    if (heightType == 'cm' && (heigth < 150 || height > 193)) return false;
    if (heightType == 'in' && (heigth < 59 || height > 76)) return false;
    if (birthYear.length != 4 || parseInt(birthYear) < 1920 || parseInt(birthYear) > 2002) return false;
    if (issueYear.length != 4 || parseInt(issueYear) < 2010 || parseInt(issueYear) > 2020) return false;
    if (expirationYear.length != 4 || parseInt(expirationYear) < 2020 || parseInt(expirationYear) > 2030) return false;
    if (hairColor.match(/#[0-9a-f]*/g) == null || hairColor.match(/#[0-9a-f]*/g)[0].length != 7) return false;
    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColor)) return false;
    if (passportId.match(/[0-9]*/g)[0].length != 9) return false;
    return true;
  }
});
console.log(puzzle2.length);