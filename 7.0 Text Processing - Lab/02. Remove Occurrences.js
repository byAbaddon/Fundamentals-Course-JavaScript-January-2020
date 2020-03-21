function removeOccurrences(word, inputText) {
  let result = inputText.split(word).join('').replace(word, '')
  console.log(result);
}

//removeOccurrences('ice', 'kicegiciceeb')