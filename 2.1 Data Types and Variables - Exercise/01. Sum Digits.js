function sumDigits(num) {
  let sumNumbers = num.toString().split('').reduce((a, b) => +a + +b)
  console.log(sumNumbers);
}

//sumDigits(245678)