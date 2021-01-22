function sumDigits(num) {
  return num.toString().split('').reduce((a, b) => +a + +b)
}

// console.log(sumDigits(245678))