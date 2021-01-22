function sumEvenNumbers(inputArr) {
  return inputArr.reduce((a, b) => b % 2 === 0 ? +a + +b : a, 0)
}

// console.log(sumEvenNumbers(['1', '2', '3', '4', '5', '6']))
// console.log(sumEvenNumbers(['3', '5', '7', '9']))



//---------------------------------------(2)----------------------------------
function sumEvenNumbers(inputArr) {
  let arr = [...inputArr]
  let sum = 0
  for (let i = 0; i < arr.length; i++) {

    if ((arr[i] & 1) === 0) {
      sum += Number(arr[i])
    }
  }
  console.log(sum);
}

// sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
// sumEvenNumbers(['3', '5', '7', '9'])