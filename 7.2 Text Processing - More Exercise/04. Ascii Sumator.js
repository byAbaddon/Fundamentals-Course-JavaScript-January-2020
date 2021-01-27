function asciiSumator(arr) {
  let firstChar = arr.shift().charCodeAt()
  let secondChar = arr.shift().charCodeAt()
  let str = Array.from(...arr).map(el => el.charCodeAt())
  let sum = 0

  for (let char of str) {
    if (firstChar < secondChar && char > firstChar && char < secondChar) {
      sum += char
    } else if (firstChar > secondChar && char < firstChar && char > secondChar) {
      sum += char
    }
  }

  return sum
}

// console.log(asciiSumator(['.', '@', 'dsg12gr5653feee5', ]))
// console.log(asciiSumator(['?', 'E', '@ABCEF', ]))
// console.log(asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']))