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
const n = 3
const output = factorialOfNumber(n)

console.log(`Factorial of the passed number ${n} is: `, output)