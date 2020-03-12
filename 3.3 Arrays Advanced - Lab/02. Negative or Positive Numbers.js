function negativeOrPositiveNumbers(inputArr) {
  let arr = [...inputArr]
  let result = []
  arr.filter(el => el < 0 ? result.unshift(el) : result.push(el))
  console.log(result.join('\n'));
}

//negativeOrPositiveNumbers([7, -2, 8, 9])
//negativeOrPositiveNumbers([3, -2, 0, -1])