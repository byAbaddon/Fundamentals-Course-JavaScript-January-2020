function maxNumber(inputArr) {
  let arr = [...inputArr]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      arr.splice(i-1,1)
      i = 0;
    }
  }

  console.log(arr.join(' '));
}

//maxNumber([14, 24, 3, 19, 15, 17])
//maxNumber([27, 19, 42, 2, 13, 45, 48])