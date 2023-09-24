// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
  if(typeof value === 'string'){
    return value.length;
  } else{
    return value * value;
  }
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt ("enter a value as either a string or a number");
const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);

// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);

console.log(typeof result);
console.log(result);
