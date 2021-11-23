const prompt = require('prompt-sync')();

function Calculator() {
  this.read = function () {
    this.num1 = + prompt('Enter num1 ');
    this.num2 = + prompt('Enter num2 ');
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

// Instantiate the Calculator
const calculator = new Calculator();
// Read from terminal
calculator.read();
// Call the sum method
const sum = calculator.sum()
// Call the multilpication method
const mul = calculator.mul()

console.log(`Sum method invoked, sum of the entered numbers is:`, sum)
console.log(`Mul method invoked, multiplication of entered numbers is:`, mul)
