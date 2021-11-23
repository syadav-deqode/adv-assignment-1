// const factorialOfNumber = function (n) {
//   if (n > 1) {
//     return n * factorialOfNumber(n - 1)
//   } else {
//     return 1
//   }
// }

/**
 * We can do above code in minimal way.
 * Using arrow function.
 * Using ternary operator
*/

const factorialOfNumber = (n) => n > 1 ? n * factorialOfNumber(n - 1) : 1;

const output = factorialOfNumber(3)

console.log(`Factorial is: `, output)