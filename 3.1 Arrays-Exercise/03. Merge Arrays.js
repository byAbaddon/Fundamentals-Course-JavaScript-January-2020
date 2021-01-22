function mergeArrays(array1, array2) {
  let arr1 = [...array1]
  let arr2 = [...array2]
  let arr3 = []

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr3.push(+arr1[i] + +arr2[i])
    } else {
      arr3.push(arr1[i] + arr2[i])
    }
  }

  return arr3.join(' - ')
}

// console.log(mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']))