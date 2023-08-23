'use strict';

function generateTable() {
  const numberInput = document.getElementById("number");
  const tableContainer = document.getElementById("tableContainer");
  const n = parseInt(numberInput.value);

  if (isNaN(n) || n < 1) {
      tableContainer.innerHTML = "Please enter a valid positive integer.";
      return;
  }

  let tableHTML = "<table>";

  for (let i = 1; i <= n; i++) {
      tableHTML += "<tr>";

      for (let j = 1; j <= n; j++) {
          const product = i * j;
          tableHTML += `<td>${product}</td>`;
      }

      tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  tableContainer.innerHTML = `<p>Multiplication Table:</p>${tableHTML}`;
}
