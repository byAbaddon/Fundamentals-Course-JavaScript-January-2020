function oddAndEvenSum(num) {
  let str = String(num)
  let oddSum = 0
  let evenSum = 0

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 === 0 ? evenSum += +str[i] : oddSum += +str[i]
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

//oddAndEvenSum(1000435)
// oddAndEvenSum(3495892137259234)