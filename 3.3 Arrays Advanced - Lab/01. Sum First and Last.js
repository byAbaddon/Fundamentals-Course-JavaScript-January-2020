function sumFirstLast(inputArr) {
  let arr = [...inputArr]
  let firstNum = +arr.shift()
  let secondNum = +arr.pop()
  console.log(firstNum + secondNum);
}

//sumFirstLast(['20', '30', '40'])