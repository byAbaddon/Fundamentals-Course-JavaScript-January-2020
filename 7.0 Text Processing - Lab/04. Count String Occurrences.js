function countStringOccurrences(text, searchWord) {
  return text.split(' ').filter(el => el == searchWord).length
}

// console.log(countStringOccurrences("This is a word and it also is a sentence", "is"))



//============================================(2)========================

function countStrOcc(str, word) {
  const re = new RegExp(`\\b${word}\\b`, 'gi')
  const result = str.match(re)
  console.log(result ? result.length : 0)
}

// countStrOcc("This is a word and it also is a sentence", "is")