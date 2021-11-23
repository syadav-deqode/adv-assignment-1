function Calculator(num1, num2) {
  this.read = function () {
    this.num1 = + num1;
    this.num2 = + num2;
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

// Instantiate the Calculator
const calculator = new Calculator(10, 20);
// Calling read method to set the passed numbers
calculator.read();
// Call the sum method
const sum = calculator.sum()
// Call the multilpication method
const mul = calculator.mul()

console.log(`Sum method invoked, sum of the entered numbers is:`, sum)
console.log(`Mul method invoked, multiplication of entered numbers is:`, mul)
