function numberModification(n) {
  let num = [...String(n).split('').map(Number)]

  while (Infinity) {
    let lengthList = num.length
    let sumNumbers = num.reduce((a, b) => a + b)
    let average = sumNumbers / lengthList
    if (average > 5) {
      console.log(num.join(''));
      return
    }

    num.push(9)
  }
}

//numberModification(101)
//numberModification(5835) 