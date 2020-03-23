function stringSubstring(word, text) {
  let wordsText = text.toLowerCase().split(" ");
  for (let el of wordsText) {
    if (el === word.toLowerCase()) {
      console.log(el);
      return
    }
  }

  console.log(`${word} not found!`)
}

// stringSubstring('javascript', 'JavaScript is the best programming language')
// stringSubstring('python', 'JavaScript is the best programming language')