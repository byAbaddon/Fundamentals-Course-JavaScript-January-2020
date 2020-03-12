function processOddNumbers(arg) {
  let str = []
  for (let i = 1; i < arg.length; i += 2) {
    str.push(arg[i] * 2)
  }
  console.log(str.reverse().join(' '));
}

//processOddNumbers([3, 0, 10, 4, 7, 3])