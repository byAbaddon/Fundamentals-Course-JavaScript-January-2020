function printAndSum(start, end) {
  let strCollection = ''
  let sum = 0

  for (let i = start; i <= end; i++) {
    strCollection += i + ' '
    sum += i
  }

  return `${strCollection}\nSum: ${sum}`
}

// console.log(printAndSum(5, 10))
// console.log(printAndSum(0, 26))
// console.log(printAndSum(50, 60))