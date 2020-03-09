function magicMatrices(inputArr) {
  let arr = [...inputArr]
  // console.log(arr);
  let sumRow = 0
  let checkIsEqualSum = 0
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      sumRow += arr[row][col]
    }
    checkIsEqualSum == 0 ? checkIsEqualSum = sumRow : null
    if (checkIsEqualSum !== sumRow) {
      console.log('false');
      return
    }
    sumRow = 0
  }

  console.log('true');
}

// magicMatrices([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5]
// ])


