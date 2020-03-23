function replaceRepeatingChars(str) {
  let word = ''
  
  for (let i = 0; i < str.length; i++) {
    current = str[i]
    if (current !== str[i + 1]) {
      word += str[i]
    }
  }

  console.log(word);
}

// replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
// replaceRepeatingChars('qqqwerqwecccwd')