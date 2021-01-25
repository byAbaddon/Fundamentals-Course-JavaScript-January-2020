function revealWords(...input) {
  let arrWords = input[0]
  let text = input[1].split(' ')
  let collection = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i].includes('*')) {
      let getLength = text[i].length
      arrWords.split(', ').forEach(el => el.length === getLength ? text[i] = el : null)
    }

    collection += text[i] + ' '
  }

  return collection
}

//console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'))