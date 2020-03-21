function censoredWords(text, word) {
 for (let i = 0; i < 10; i++) {
    text = text.replace(word, '*'.repeat(word.length))
  }
  console.log(text);
}

// censoredWords("A small sentence small with some words", "small")