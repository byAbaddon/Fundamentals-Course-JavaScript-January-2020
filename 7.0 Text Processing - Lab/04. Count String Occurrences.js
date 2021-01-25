function countStringOccurrences(text, searchWord) {
  return text.split(' ').filter(el => el == searchWord).length
}

// console.log(countStringOccurrences("This is a word and it also is a sentence", "is"))