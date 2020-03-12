function searchForNumber(arr1, arr2) {
  let arrOfNumbers = [...arr1]
  let numberToTake = arr2[0]
  let numberDeleteElement = arr2[1]
  let numberToSearchElement = arr2[2]

  let takeNewElement = arrOfNumbers.splice(0, numberToTake)
  takeNewElement.splice(0, numberDeleteElement)
  let count = takeNewElement.filter(el => el === numberToSearchElement).length

  console.log(`Number ${numberToSearchElement} occurs ${count} times.`);
}

//searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])