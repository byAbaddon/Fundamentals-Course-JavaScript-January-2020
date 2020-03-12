function bombNumbers(arr1, arr2) { 
  let targetArr = arr1
  let bombTarget = arr2[0]
  let bombSpread = arr2[1]

  let targetIndex = targetArr.indexOf(bombTarget)

  while (targetIndex !== -1) {

    targetArr.splice(targetIndex, bombSpread) //remove bombSpread right element

    if (targetIndex - bombSpread < 0) {
      targetArr.splice(0, bombSpread + 1) //remove bombSpread left element
    } else {
      targetArr.splice(targetIndex - bombSpread, bombSpread + 1) //remove bombSpread left element
    }

    targetIndex = targetArr.indexOf(bombTarget)
  }

  console.log(targetArr.reduce((a, b) => a + b, 0));
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]) //12
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]) //5
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]) //4











// function bombNumbers(arr1, arr2) {
//   let targetArr = arr1
//   let bombTarget = arr2[0]
//   let bombSpread = arr2[1]

//   let targetIndex = targetArr.indexOf(bombTarget)
//   while (targetIndex !== -1) {

//     targetArr.splice(targetIndex, bombSpread) //remove bombSpread right element
//     targetArr.splice(targetIndex - bombSpread, bombSpread + 1) //remove bombSpread left element
//     targetIndex = targetArr.indexOf(bombTarget)
//   }

//   console.log(targetArr.reduce((a, b) => a + b));
// }

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]) //12
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]) //5
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]) //4