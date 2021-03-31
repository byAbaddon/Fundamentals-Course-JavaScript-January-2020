function perfectNumber(num) {
  let sumDivisor = 0

  for (let i = 0; i < num; i++)
    num % i == 0 ? sumDivisor += i : null

  return num == sumDivisor ? 'We have a perfect number!' : 'It\'s not so perfect.'
}

//console.log(perfectNumber(28))