const factorialOfNumber = function (n) {
  if (n > 1) {
    return n * factorialOfNumber(n - 1)
  } else {
    return 1
  }
}

const output = factorialOfNumber(3)

console.log(`Factorial is: `, output)