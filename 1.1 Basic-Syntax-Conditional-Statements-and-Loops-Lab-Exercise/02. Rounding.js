function rounding(number, roundNum) {
  if (roundNum > 15) {
    roundNum = 15
  }
  
  return parseFloat(number.toFixed(roundNum))
}

// console.log(rounding(3.1415926535897932384626433832795, 2))
// console.log(rounding(10.5 , 3))