function replaceRepeatingChars(str) {
  let word = ''
  
  for (let i = 0; i < str.length; i++) {
    current = str[i]
    if (current !== str[i + 1]) {
      word += str[i]
    }
  }

  return word
}

// console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'))
// console.log(replaceRepeatingChars('qqqwerqwecccwd'))