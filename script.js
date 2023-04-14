let firstNumber;
let secondNumber;
let operator;

function add(firstNumber, secondNumber) {
  console.log(firstNumber);
  console.log(secondNumber);
  let result = Number(firstNumber) + Number(secondNumber);
  console.log(result);
  return result;
}

function subtract(firstNumber, secondNumber) {
  return Number(firstNumber) - Number(secondNumber);
}

function multiply(firstNumber, secondNumber) {
  return Number(firstNumber) * Number(secondNumber);
}

function divide(firstNumber, secondNumber) {
  if (Number(secondNumber) == 0) {
    alert("Cant divide by zero");
    first = [];
    return;
  }
  return Number(firstNumber) / Number(secondNumber);
}

function operate(firstArray, operatorArray) {
  while (operatorArray.length > 0) {
    firstNumber = firstArray.shift();
    secondNumber = firstArray.shift();
    operator = operatorArray.shift();

    let result;
    switch (operator) {
      case "+":
        result = add(firstNumber, secondNumber);
        console.log(result);
        break;
      case "-":
        result = subtract(firstNumber, secondNumber);
        console.log(result);
        break;
      case "x":
        result = multiply(firstNumber, secondNumber);
        console.log(result);
        break;
      case "/":
        result = divide(firstNumber, secondNumber);
        console.log(result);

        break;
    }

    firstArray.unshift(result);
  }
}

const button = document.querySelectorAll("button");
const currScreen = document.querySelector("#sc2");
const prevScreen = document.querySelector("#sc1");

let operation = [];
let first = [];
let second = [];
let OperationCount = 0;

button.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    if (button.textContent >= 0 && button.textContent < 10) {
      currScreen.textContent += button.textContent;
    }

    if (button.textContent == "Clear") {
      currScreen.textContent = "";
      prevScreen.textContent = "";
      first = [];
      operation = [];
    }

    if (button.textContent == "Delete") {
      currScreen.textContent = currScreen.textContent.substring(
        0,
        currScreen.textContent.length - 1
      );
    }

    if (
      button.textContent == "+" ||
      button.textContent == "-" ||
      button.textContent == "x" ||
      button.textContent == "/"
    ) {
      first.push(currScreen.textContent);
      if (first.length == 2) {
        operate(first, operation);
        currScreen.textContent = first[0];
      }
      prevScreen.textContent = currScreen.textContent + button.textContent;
      currScreen.textContent = "";

      operation.push(button.textContent);
    }

    if (button.textContent == "=") {
      first.push(currScreen.textContent);
      prevScreen.textContent = "";
      currScreen.textContent = "";
      operate(first, operation);
      currScreen.textContent = first[0];
    }
  });
});
