// Get the container div
const container = document.querySelector(".container");
const buttons = container.querySelectorAll("button");
const previousOperandText = document.querySelector("[data-previousOperand]");
const currentOperandText = document.querySelector("[data-currentOperand]");
const negateButton = document.getElementById("negateButton");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearAllButton = document.querySelector("[data-clearAll]");
const deleteButton = document.querySelector("[data-delete]");
const calculateButton = document.querySelector("[data-calculate]");

// Add click noise on button click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = document.getElementById("mySound");
    audio.play();
  });
});

// Clear the operands
function clear() {
  previousOperandText.innerHTML = "";
  currentOperandText.innerHTML = "";
}

// Remove the last character from the current operand
function remove() {
  currentOperandText.innerHTML = currentOperandText.innerHTML.slice(0, -1);
}

// Append the button text to the current operand
function append(buttonText) {
  if (buttonText === "." && currentOperandText.innerHTML.includes(".")) {
    return;
  }
  if (currentOperandText.innerHTML === "" && buttonText.match(/[+\-*/]/)) {
    if (previousOperandText.innerHTML !== "") {
      const previousOperand = parseFloat(previousOperandText.innerHTML);
      operation = buttonText;
      previousOperandText.innerHTML = previousOperand + " " + operation;
    }
    return;
  }

  if (buttonText.match(/[+\-*/]/)) {
    calculate();
  }

  if (buttonText === "+/-") {
    const currentOperand = parseFloat(currentOperandText.innerHTML);
    currentOperandText.innerHTML = -currentOperand;
    return;
  }

  switch (buttonText) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      currentOperandText.innerHTML += buttonText;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      operation = buttonText;
      previousOperand = parseFloat(currentOperandText.innerHTML);
      previousOperandText.innerHTML = previousOperand + " " + operation;
      currentOperandText.innerHTML = "";
      break;
    default:
      // Handle other cases if needed
      break;
  }
}

// Perform the calculation
function calculate() {
  const current = parseFloat(currentOperandText.innerText);
  let previous = parseFloat(previousOperandText.innerHTML);
  let operation = previousOperandText.innerHTML.split(" ")[1];
  let result;

  switch (operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "/":
      result = previous / current;
      break;
    default:
      return; // If no valid operation, exit the function
  }

  currentOperandText.innerHTML = result;
  previousOperandText.innerHTML = "";
}

// Event listeners
negateButton.addEventListener("click", () => {
  const currentOperand = parseFloat(currentOperandText.innerHTML);
  if (!isNaN(currentOperand)) {
    currentOperandText.innerHTML = -currentOperand;
  } else {
    currentOperandText.innerHTML = "";
  }
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    append(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operand = button.innerText;
    append(operand);
  });
});

clearAllButton.addEventListener("click", clear);
calculateButton.addEventListener("click", calculate);
deleteButton.addEventListener("click", remove);
