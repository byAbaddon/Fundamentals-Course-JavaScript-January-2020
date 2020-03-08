function addOrSubtract(inputArray) {
  let arr = [...inputArray]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = arr[i] + i
    } else {
      arr[i] = arr[i] - i
    }
  }

  let sumOriginalArr = inputArray.reduce((a, b) => a + b)
  let sumModifiedArr = arr.reduce((a, b) => a + b)
  console.log(arr);
  console.log(`${sumOriginalArr}\n${sumModifiedArr}`);
}

addOrSubtract([-5, 11, 3, 0, 2])