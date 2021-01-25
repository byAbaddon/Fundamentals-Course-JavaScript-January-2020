function wrongResult(num1, num2, num3) {
  let sum = num1 * num2 * num3
  return sum < 0 ? 'Negative' : 'Positive'
}

// console.log(wrongResult(5, 12, -15))
// console.log(wrongResult(-1, 0, 1))