function reverseAnArrayOfNumbers(num, inputArr) {
  // console.log(inputArr.slice(0, num).reverse().join(' '));  //fast solution in one row !!!
  let arr = [...inputArr]
  let reversedArr = []
  let stringOfNum = ''

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (num > i) {
      stringOfNum += arr[i] + ' '
    }
  }

  console.log(stringOfNum);
}

// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])