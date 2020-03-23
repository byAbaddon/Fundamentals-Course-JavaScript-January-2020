function passwordGenerator(inputArr) {
  let text = Array.from(inputArr[0] + inputArr[1])
  let chars = Array.from(inputArr[2].toUpperCase())
  let arrCollection = []

  for (let i = 0; i < text.length; i++) {
    if (/[aeiou]/.test(text[i])) {
      let extractedChar = chars.shift() //getChar
      chars.push(extractedChar) //loopAndBackExtractedChar 

      let getIndex = text.indexOf(text[i]) //getIndex
      text[getIndex] = '' //removeCharIndexFromText

      arrCollection.push(extractedChar) //addFromNewCollection
    }

    arrCollection.push(text[i])
  }

  let password = arrCollection.reverse().join('')
  console.log(`Your generated password is ${password}`);
}

//passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])