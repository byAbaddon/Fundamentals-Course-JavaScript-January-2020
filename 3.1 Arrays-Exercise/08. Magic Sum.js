function magicSum(numArr, n) {
  let collection = []
  for (let row = 0; row < numArr.length - 1; row++) {
    for (let col = row + 1; col < numArr.length; col++) {

      if (numArr[row] + numArr[col] === n) {
        console.log(numArr[row], numArr[col])

      }
    }
  }

  for (let i = 0; i < collection.length; i++) {
    console.log([`collection.splice(0,2).join(' ')`])
  }
}


// magicSum([1, 7, 6, 2, 19, 23], 8)
// magicSum([14, 20, 60, 13, 7, 19, 8], 27)
// magicSum([1, 2, 3, 4, 5, 6], 6)