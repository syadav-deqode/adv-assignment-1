// Checing first letter of string is capital or not
const checkFirstLetterCapital = (s) => s.charAt(0) === s.charAt(0).toUpperCase()

// Make capital if string start with small letter
const makeFirstLetterCapital = (s) => {
  const isCaptal = checkFirstLetterCapital(s)
  if (!isCaptal) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  } else {
    return s
  }
}

const s = "Hey i am correct string."

const upperCase = makeFirstLetterCapital(s)

console.log(`The pass string modified and made upperCase::`, upperCase)