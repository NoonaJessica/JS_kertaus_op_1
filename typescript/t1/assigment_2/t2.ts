// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num: number | null | undefined ): number | string {
  // TODO: Check if the input is undefined or null. If fail, return 'Input is undefined or null.'
  if (num === undefined || num === null){
    return 'Input is undefined of null';
  }
  // TODO: Check if the input is a valid number. If fail, return 'Invalid input. Please enter a valid number.'
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Invalid input. Please enter a valid number.';
  }
  // TODO: Handle cases where the input is negative. If fail, return 'Cannot calculate square root of a negative number.'
  if (num < 0){
    return 'Cannot calculate square root of a negative number.'
  }
  // Calculate the square root and return the result
  const sqrt = Math.sqrt(num);
  return sqrt;
}

// Prompt the user to enter a number
const userInput = prompt('Enter number: ');

// Convert user input to a number or keep it undefined if empty
const numberInput: number | undefined = userInput ? parseFloat(userInput) : undefined;

// Call the squareRoot function and display the result
const result = squareRoot(numberInput);
console.log(result);