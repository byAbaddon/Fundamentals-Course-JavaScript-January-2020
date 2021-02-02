function magicMatrices(arr) {
  let sumRow = checkIsEqualSum = 0

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


