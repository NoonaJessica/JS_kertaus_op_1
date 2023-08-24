'use strict';
const point1Input = prompt("Enter coordinates for point 1 (x, y):");
const point2Input = prompt("Enter coordinates for point 2 (x, y):");

const [x1, y1] = point1Input.split(',').map(Number);
const [x2, y2] = point2Input.split(',').map(Number);

// Calculate the Euclidean distance
const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

// Display the result in an HTML element
const resultElement = document.createElement('p');
resultElement.textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}`;
document.body.appendChild(resultElement);

