function countStringOccurrences(text, searchWord) {
  let result = text.split(' ').filter(el => el === searchWord).length
  console.log(result);
}

//countStringOccurrences("This is a word and it also is a sentence", "is")