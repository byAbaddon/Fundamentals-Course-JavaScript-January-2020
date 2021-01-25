function oddAndEvenSum(num) {
  let str = String(num)
  let oddSum = evenSum = 0

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 === 0 ? evenSum += +str[i] : oddSum += +str[i]
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

// console.log(oddAndEvenSum(1000435))
// console.log(oddAndEvenSum(3495892137259234))