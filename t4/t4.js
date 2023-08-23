'use strict';


function calculateGrade() {
  const scoreInput = document.getElementById("score");
  const resultElement = document.getElementById("result");
  const score = parseFloat(scoreInput.value);

  if (isNaN(score) || score < 0 || score > 100) {
      resultElement.textContent = "Please enter a valid score between 0 and 100.";
      return;
  }

  let grade;
  if (score >= 0 && score < 40) {
      grade = 0;
  } else if (score < 52) {
      grade = 1;
  } else if (score < 64) {
      grade = 2;
  } else if (score < 76) {
      grade = 3;
  } else if (score < 88) {
      grade = 4;
  } else {
      grade = 5;
  }

  resultElement.innerHTML = `Your score of ${score} corresponds to a grade of ${grade}.`;
}
