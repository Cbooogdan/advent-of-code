/*
  Title: Day sixteen
  URL for instructions: https://adventofcode.com/2020/day/16
*/

let input = global.loadInput().blocks();
// let input = document.querySelector('pre').textContent.trim().split('\n');
// input = input.map(element => [...element]);

// Puzzle 1
let errorRate = 0;

let [ranges, myTicket, nearbyTickets] = input;
ranges = ranges.split('\n');
myTicket = myTicket.split('\n')[1].split(',');
nearbyTickets = nearbyTickets.split('\n');
nearbyTickets.shift();

const minMaxValues = ranges.map(range => {
  const [type, minMax] = range.split(': ');
  const [firstRange, secondRange] = minMax.split(' or ');

  return [
    type,
    [...firstRange.split('-').map(Number)],
    [...secondRange.split('-').map(Number)]
  ]
});

const firstPuzzle = () => {
  nearbyTickets.forEach(ticket => {
    const values = ticket.split(',');
    values.forEach(value => {
      const isValid = minMaxValues.some(([_, firstRange, lastRange]) => {

        return (value >= firstRange[0] && value <= firstRange[1]) ||
            (value >= lastRange[0] && value <= lastRange[1]);
      })

      errorRate += isValid ? 0 : Number(value);
    })
  })

  console.log(errorRate);
};

// firstPuzzle();

// Puzzle 2
let fields = new Map();

// const secondPuzzle = () => {
//   let index = 0;
//     minMaxValues.forEach(([type, firstRange, lastRange]) => {
//       console.log(type);
//       index = 0;
//       while(index < nearbyTickets.length) {
//         const allTicketsForType = nearbyTickets.every(ticket => {
//           ticket = ticket.split(',')[index];
//           ticket = Number(ticket);
//           console.log(ticket);
//           console.log(firstRange, lastRange);
//           console.log((ticket >= firstRange[0] && ticket <= firstRange[1]) ||
//               (ticket >= lastRange[0] && ticket <= lastRange[1]));
//
//           return (ticket >= firstRange[0] && ticket <= firstRange[1]) ||
//             (ticket >= lastRange[0] && ticket <= lastRange[1]);
//         })
//
//         if (allTicketsForType) {
//           console.log(allTicketsForType);
//           fields.set(type, index);
//         }
//
//         index++;
//       }
//     });
//
//
//   console.log(fields);
// };

const secondPuzzle = () => {
  minMaxValues.forEach(([type, firstRange, lastRange]) => {
    nearbyTickets.forEach((ticket, index) => {
      const values = ticket.split(',');
      console.log(type);
      console.log(values);

      const allTicketsForType = values.every(value => {
        return (value >= firstRange[0] && value <= firstRange[1]) ||
            (value >= lastRange[0] && value <= lastRange[1]);
      });
      console.log(firstRange, lastRange);
      console.log(allTicketsForType);

      if (allTicketsForType) {
        fields.set(type, index);
      }
    })
  })

  // nearbyTickets.forEach((ticket, index) => {
  //   const values = ticket.split(',');
  //
  //   values.forEach(value => {
  //     console.log(value);
  //     const isValid = minMaxValues.every(([type, firstRange, lastRange]) => {
  //
  //       return (value >= firstRange[0] && value <= firstRange[1]) ||
  //           (value >= lastRange[0] && value <= lastRange[1]);
  //     })
  //
  //   })
  //   fields.set(type, index);
  // })

}

secondPuzzle();
console.log(fields);


