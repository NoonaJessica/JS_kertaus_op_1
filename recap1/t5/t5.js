'use strict';

function calculateSum() {
  const numberInput = document.getElementById("number");
  const sumResultElement = document.getElementById("sumResult");
  const n = parseInt(numberInput.value);

  if (isNaN(n) || n < 1) {
      sumResultElement.textContent = "Please enter a valid positive integer.";
      return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }

  sumResultElement.innerHTML = `The sum of natural numbers up to ${n} is ${sum}.`;
}
