function specialNumbers(input) {
  let number = input
  let isSpecialNumber = ''

  for (let i = 1; i <= number; i++) {
    const test = Math.trunc((i / 10) + (i % 10))
    if (test === 5 || test === 7 || test === 11) {
      isSpecialNumber = 'True'
    } else {
      isSpecialNumber = 'False'
    }
    console.log(`${i} -> ${isSpecialNumber}`);
  }
}

// specialNumbers(30)