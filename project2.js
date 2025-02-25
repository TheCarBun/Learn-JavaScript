const prompt = require("prompt-sync")();
let number1;
let number2;

function getNumber(numberString) {
  while (true) {
    const number = parseFloat(prompt(`Enter Number ${numberString}: `));
    if (isNaN(number)) {
      console.log("Invalid Input");
    } else {
      return number;
    }
  }
}

number1 = getNumber("One");
number2 = getNumber("Two");
const operator = prompt("Enter Sign: ");

let result;
let validResult = true;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;

  case "/":
    if (number2 === 0) {
      validResult = false;
      console.log("Zero Division Error");
    }
    result = number1 / number2;
    break;

  default:
    result = "Invalid";
    validResult = false;
    break;
}
if (validResult) console.log(number1, operator, number2, "=", result);
