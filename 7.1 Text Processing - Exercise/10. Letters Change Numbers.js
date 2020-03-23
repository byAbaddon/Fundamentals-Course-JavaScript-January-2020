function lettersChangeNumbers(inputArr) {           //TODO
  let arr = inputArr.match(/(\w+\d+\w+)/g)//
 // let arr = inputArr.split(/\s/g).filter(el => el !== '' && el.length < 11)
  let arrAlphabetic = ['№', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']
  let totalSum = 0

  for (let i = 0; i < arr.length; i++) {

    let firstChar = arr[i].slice(0, 1)
    let secondChar = arr[i].slice(-1)
    let number = +arr[i].slice(1, -1)
    let getAlphabeticIndex = arrAlphabetic.indexOf(firstChar.toLowerCase())

    if (/[A-Z]/.test(firstChar)) { //first char
      number /= getAlphabeticIndex
    } else {
      number *= getAlphabeticIndex
    }
    getAlphabeticIndex = arrAlphabetic.indexOf(secondChar.toLowerCase())
    if (/[A-Z]/.test(secondChar)) { //second char
      number -= getAlphabeticIndex
    } else {
      number += getAlphabeticIndex
    }

    totalSum += number
  }

  console.log(totalSum.toFixed(2));
}
// lettersChangeNumbers('A12b s17G')
//lettersChangeNumbers('P34562Z q2576f   H456z')
// lettersChangeNumbers('a1A')
