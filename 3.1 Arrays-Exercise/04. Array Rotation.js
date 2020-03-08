function arrayRotation(array, num) {
  let arr = [...array]

  for (let i = 0; i < num; i++) {
   let rotNum = arr.shift()
    arr.push(rotNum)
  }

  console.log(arr.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2)
// arrayRotation([2, 4, 15, 31], 5)