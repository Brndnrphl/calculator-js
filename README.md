# Calculator
This calculator is my first project built with HTML, CSS and Javascript

## Overview
This README provides an explanation of the JavaScript code in script.js for a simple calculator application. The code defines a Calculator class that handles the calculator's functionality. It also sets up event listeners for the calculator buttons and initializes the calculator when the page loads.

## Calculator Class
The Calculator class, starting from line 1, contains the following methods:
- **constructor():** Initializes the Calculator object and sets initial values for previousOperandText, currentOperandText, and operation.
- **clear():** Clears the previous and current operand texts.
- **remove():** Removes the last character from the current operand text.
- **negate():** Changes the sign of the current operand.
- **append(buttonText):** Appends the text of the clicked button to the current operand text, handling decimal points, operators, and numbers.
- **calculate():** Performs calculations based on the stored operation and updates the current operand text with the result.

## Event Listeners
The script.js file includes event listeners for various calculator buttons:
- **negateButton:** Listens for a click event and calls the negate() method.
- **numberButtons:** Listens for a click event on number buttons and calls the append() method with the corresponding number.
- **operationButtons:** Listens for a click event on operation buttons (+, -, *, /) and calls the append() method with the corresponding operator.
- **clearAllButton:** Listens for a click event and calls the clear() method.
- **calculateButton:** Listens for a click event and calls the calculate() method.
- **deleteButton:** Listens for a click event and calls the remove() method.
- **keyDown** Listens for when a key 1-9 is pressed and appens it to the current operand.

## Usage
To use the Calculator class, create a new instance using the `new Calculator()` syntax. The calculator is automatically initialized when the page loads.

## Additional Notes
A sound file, "click.wav," plays when any button is clicked, providing audio feedback for user interactions.
