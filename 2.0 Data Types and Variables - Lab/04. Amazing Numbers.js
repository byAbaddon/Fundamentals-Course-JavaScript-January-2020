function amazingNumbers(arg) {
  let number = arg
  let result = number.toString().split('').reduce((a, b) => +a + +b)
  result = result.toString().includes('9') ? 'True' : 'False'
  console.log(`${number} Amazing? ${result}`);
}

//amazingNumbers(1233)
//amazingNumbers(999)