function lettersChangeNumbers(input) { 
  input = input.split(' ')
  input = input.filter(x => x != '')
  let totalSum = 0

  for (let element of input) {
     
      element = element.split('')
      let firstLetter = element.shift()
      let secLetter = element.pop()
      let number = Number(element.join(''))
      if (isUpper(firstLetter)) {
          number = number / getAlphabetPosition(firstLetter)
      } else {
          number = number * getAlphabetPosition(firstLetter)
      }
      if (isUpper(secLetter)) {
          number = number - getAlphabetPosition(secLetter)
      } else {
          number = number + getAlphabetPosition(secLetter)
      }

      totalSum += number
  }

  console.log(totalSum.toFixed(2))

  function getAlphabetPosition(letter) {
      letter = letter.toUpperCase();
      let code = letter.charCodeAt(0);
      return code - 64
  }
  function isUpper(letter) {
      let charCode = letter.charCodeAt(0);
      return (charCode >= 65 && charCode <= 90)
  }
  function isLower(letter) {
      let charCode = letter.charCodeAt(0);
      return (charCode >= 97 && charCode <= 122)
  }
}

// lettersChangeNumbers('A12b s17G')
// lettersChangeNumbers('P34562Z q2576f   H456z')
// lettersChangeNumbers('a1A')
