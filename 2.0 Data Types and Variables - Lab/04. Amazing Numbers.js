function amazingNumbers(number) {
  let result = number.toString().split('').reduce((a, b) => +a + +b)
  result = result.toString().includes('9') ? 'True' : 'False'
  return `${number} Amazing? ${result}`
}

// console.log(amazingNumbers(1233))
// console.log(amazingNumbers(999))