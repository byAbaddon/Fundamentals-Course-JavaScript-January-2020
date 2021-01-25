function processOddNumbers(arg) {
  let str = []
  for (let i = 1; i < arg.length; i += 2) {
    str.push(arg[i] * 2)
  }

  return str.reverse().join(' ')
}

// console.log(processOddNumbers([3, 0, 10, 4, 7, 3]))