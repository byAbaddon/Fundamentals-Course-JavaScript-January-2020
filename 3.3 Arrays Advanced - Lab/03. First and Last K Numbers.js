function firstAndLastKNumbers(inputArr) {
  let arr = [...inputArr]
  let k = arr.shift() 
  console.log(arr.slice(0, k).join(' '));
  console.log(arr.slice( -k).join(' '));
  }

//firstAndLastKNumbers([3, 6, 7, 8, 9])