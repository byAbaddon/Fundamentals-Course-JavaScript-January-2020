function passwordGenerator(inputArr) {
  let text = Array.from(inputArr[0] + inputArr[1])
  let chars = Array.from(inputArr[2].toUpperCase())
  let arrCollection = []

  for (let i = 0; i < text.length; i++) {
    if (/[aeiou]/.test(text[i])) {
      let extractedChar = chars.shift()
      chars.push(extractedChar)

      let getIndex = text.indexOf(text[i])
      text[getIndex] = ''

      arrCollection.push(extractedChar)
    }

    arrCollection.push(text[i])
  }

  let password = arrCollection.reverse().join('')
  return `Your generated password is ${password}`
}

// console.log(passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']))