'use strict';

let numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'f' to finish):");

  if (input === 'f') {
    break;
  }

  let number = parseInt(input);

  if (!isNaN(number)) {
    numbers.push(number);
  }
}

let evenNumbers = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  console.log('Even Numbers: ' + evenNumbers.join(', '));
} else {
  console.log('Even Numbers: None');
}
