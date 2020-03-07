function evenAndOddSubtraction(inputArray) {
  let arr = [...inputArray]
  let [oddSum, evenSum] = [0, 0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i]
    } else {
      oddSum += arr[i]
    }
  }
  console.log(evenSum - oddSum);
}

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
// evenAndOddSubtraction([3, 5, 7, 9])
// evenAndOddSubtraction([2, 4, 6, 8, 10])

//------------------------------------------------------------ second variant

// function evenAndOddSubtraction(inputArray) {
//   console.log(inputArray.reduce((accumulator, el) => {
//     let [even, odd] = [accumulator, 0]
//     el % 2 === 0 ? even += el : odd += el
//     return even - odd
//   }, 0));
// }

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
// evenAndOddSubtraction([3, 5, 7, 9])
// evenAndOddSubtraction([2, 4, 6, 8, 10])



