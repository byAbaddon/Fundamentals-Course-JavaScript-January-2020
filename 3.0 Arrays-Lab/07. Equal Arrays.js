function equalArrays(arr1, arr2) {

  let sumOrIndex = 0
  for (let i = 0; i < arr1.length; i++) {
    if (+arr1[i] === +arr2[i]) {
      sumOrIndex += +arr1[i]
    } else {
      sumOrIndex = i
      console.log(`Arrays are not identical. Found difference at ${sumOrIndex} index`);
      return
    }
  }
  console.log(`Arrays are identical. Sum: ${sumOrIndex}`);
}

// equalArrays(['10', '20', '30'], ['10', '20', '30'])
// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
// equalArrays(['1'], ['10'])