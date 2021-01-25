function triangleOfNumbers(num) {
  let str = ''

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      str += row + ' '
    }
    console.log(str.trim())
    str = ''
  }

}

// triangleOfNumbers(6)