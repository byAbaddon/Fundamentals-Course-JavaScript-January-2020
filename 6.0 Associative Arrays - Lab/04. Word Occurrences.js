function wordOccurrences(inputArr) {
  let arr = [...inputArr]
  let map = new Map()

  while (arr.length > 0) {
    let word = arr.shift()

    if (!map.has(word)) {
      map.set(word, 1)
    } else {
      let value = map.get(word)
      map.set(word, value + 1)
    }
  }

  let sortValue = [...map.entries()].sort((a, b) => b[1] - a[1])

  for (const key of sortValue) {
    console.log(key[0] + ' -> ' + key[1] + ' times');
  }

}

//wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])