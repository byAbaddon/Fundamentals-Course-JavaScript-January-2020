function division(num) {
  let result = 0

  for (let i = 0; i <= 5; i++) {
    if (num % 2 === 0) {
      result = 2
    }
    if (num % 3 === 0) {
      result = 3
    }
    if (num % 6 === 0) {
      result = 6
    }
    if (num % 7 === 0) {
      result = 7
    }
    if (num % 10 === 0) {
      result = 10
    }
    if (result === 0) {

      return 'Not divisible'
    }
  }

  return `The number is divisible by ${result}`
}

//console.log(division(30))
//console.log(division(15))
//console.log(division(1643))