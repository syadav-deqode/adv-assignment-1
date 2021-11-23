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

/**
 * We can write above code in one line with the following approach.
 * @param {String} str It may or may not with start with capital letter.
 * @returns String start with capital letter
*/
const capitalizeString = str => str.charAt(0) === str.charAt(0).toUpperCase() ? str : str.charAt(0).toUpperCase() + str.slice(1)

const newStr = capitalizeString(s)

console.log(`Making first letter capital with minimum code:`, newStr)