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
      result = console.log('Not divisible');
      return
    }
  }
  console.log(`The number is divisible by ${result}`);
}

//division(30) 
//division(15) 
//division(1643) 