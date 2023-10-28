class Calculator {
  constructor() {
    this.previousOperandText = document.querySelector("[data-previousOperand]");
    this.currentOperandText = document.querySelector("[data-currentOperand]");
    this.operation = "";
  }

  clear() {
    this.previousOperandText.innerHTML = "";
    this.currentOperandText.innerHTML = "";
  }

  remove() {
    this.currentOperandText.innerHTML = this.currentOperandText.innerHTML.slice(
      0,
      -1
    );
  }

  negate() {
    const currentOperand = parseFloat(
      this.currentOperandText.innerHTML.replace(/,/g, "")
    );
    if (!isNaN(currentOperand)) {
      const negatedOperand = -currentOperand;
      this.currentOperandText.innerHTML = negatedOperand.toLocaleString();
    } else {
      this.currentOperandText.innerHTML = "";
    }
  }

  append(buttonText) {
    if (buttonText === "." && this.currentOperandText.innerHTML.includes(".")) {
      return;
    }
    if (
      this.currentOperandText.innerHTML === "" &&
      buttonText.match(/[+\-*/]/)
    ) {
      if (this.previousOperandText.innerHTML !== "") {
        const previousOperand = parseFloat(this.previousOperandText.innerHTML);
        this.operation = buttonText;
        this.previousOperandText.innerHTML =
          previousOperand + " " + this.operation;
      }
      return;
    }

    if (buttonText.match(/[+\-*/]/)) {
      this.calculate();
    }

    if (buttonText === "+/-") {
      const currentOperand = parseFloat(this.currentOperandText.innerHTML);
      this.currentOperandText.innerHTML = -currentOperand;
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
        // Convert the current operand to a number, then back to a string with commas
        this.currentOperandText.innerHTML = parseFloat(
          this.currentOperandText.innerHTML.replace(/,/g, "") + buttonText
        ).toLocaleString();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.operation = buttonText;
        this.previousOperand = parseFloat(
          this.currentOperandText.innerHTML.replace(/,/g, "")
        );
        this.previousOperandText.innerHTML =
          this.previousOperand.toLocaleString() + " " + this.operation;
        this.currentOperandText.innerHTML = "";
        break;
      default:
        // Handle other cases if needed
        break;
    }
  }

  calculate() {
    const current = parseFloat(
      this.currentOperandText.innerText.replace(/,/g, "")
    );
    let previous = parseFloat(
      this.previousOperandText.innerHTML.replace(/,/g, "")
    );
    let operation = this.previousOperandText.innerHTML.split(" ")[1];
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

    // After calculating the result, convert it to a string with commas
    this.currentOperandText.innerHTML = result.toLocaleString();
    this.previousOperandText.innerHTML = "";
  }
}

// Usage
const calculator = new Calculator();

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
const clickSound = new Audio("click.wav");

// Event listeners

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
  });
});

negateButton.addEventListener("click", () => {
  calculator.negate();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.append(button.innerText);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const numberButtons = document.querySelectorAll("[data-number]");
  numberButtons.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operand = button.innerText;
    calculator.append(operand);
  });
});

clearAllButton.addEventListener("click", () => {
  calculator.clear();
});

calculateButton.addEventListener("click", () => {
  calculator.calculate();
});

deleteButton.addEventListener("click", () => {
  calculator.remove();
});
