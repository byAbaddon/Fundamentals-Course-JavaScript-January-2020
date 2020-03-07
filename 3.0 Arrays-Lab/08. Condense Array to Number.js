function condenseArrayToNumber(inputArr) {
  let arr = [...inputArr]
  let condense = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let calcNum = arr[i] + arr[i + 1];
      condense.push(calcNum);
    }
    arr = [...condense]
    condense = [];
  }
  console.log(arr[0]);
}

//condenseArrayToNumber([2,10,3])
//condenseArrayToNumber([5, 0, 4, 1, 2])