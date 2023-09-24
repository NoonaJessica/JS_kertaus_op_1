// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * value;
    }
}
// Prompt the user to enter a value as either a string or a number
var userInput = prompt("enter a value as either a string or a number");
var parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);
// Call the lengthOrSquare function
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
