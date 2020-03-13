function wrongResult(num1, num2, num3) {
  let sum = num1 * num2 * num3
  console.log(sum < 0 ? 'Negative' : 'Positive');
}

// wrongResult(5, 12, -15)
// wrongResult(-1, 0, 1)