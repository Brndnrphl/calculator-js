Calculator JavaScript Code README

This README provides an overview of the JavaScript code in script.js for the Calculator application.
Overview
The script.js file contains the implementation of the Calculator class, which handles the functionality of the calculator. It also includes event listeners for the calculator buttons and initializes the calculator on page load.
Calculator Class
The Calculator class is defined starting from line 1. It has the following methods:

- constructor(): Initializes the Calculator object and sets the initial values for previousOperandText, currentOperandText, and operation.

- clear(): Clears the previous and current operand texts.

- remove(): Removes the last character from the current operand text.

- negate(): Negates the current operand by changing its sign.

- append(buttonText): Appends the clicked button's text to the current operand text. Handles decimal points, operators, and numbers.

- calculate(): Performs the calculation based on the stored operation and updates the current operand text with the result.
Event Listeners
The script.js file also includes event listeners for the calculator buttons. Here is a summary of the event listeners:

- negateButton: Listens for a click event and calls the negate() method of the Calculator class.

- numberButtons: Listens for a click event on number buttons and calls the append() method of the Calculator class with the corresponding number.

- operationButtons: Listens for a click event on operation buttons (+, -, , /) and calls the append() method of the Calculator class with the corresponding operator.

- clearAllButton: Listens for a click event and calls the clear() method of the Calculator class.

- calculateButton: Listens for a click event and calls the calculate() method of the Calculator class.

- deleteButton: Listens for a click event and calls the remove() method of the Calculator class.

## Usage
To use the Calculator class, create a new instance of the Calculator class using the new Calculator() syntax. The calculator is automatically initialized when the page loads.

## Additional Notes
- The click.wav sound file is played when any button is clicked.