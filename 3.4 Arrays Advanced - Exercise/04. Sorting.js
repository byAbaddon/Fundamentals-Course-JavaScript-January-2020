function sorting(inputArr) {
  let arr = [...inputArr].sort((a, b) => a - b)
  let sortedArr = []

  while (arr.length !== 0) {
    big = arr.pop() 
    small = arr.shift()
    sortedArr.push(big, small)
  }

  console.log(sortedArr.join(' '));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])