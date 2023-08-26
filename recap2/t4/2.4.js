'use strict';

function sortArray(numbers) {
  let sortedNumbers = [...numbers];
  sortedNumbers.sort(function (a, b) {
    return a - b;
  });
  return sortedNumbers;
}

let originalArray = [15, 2, 8, 10, 5];
let sortedArray = sortArray(originalArray);

console.log('Original Array:', originalArray);
console.log('Sorted Array:', sortedArray);
