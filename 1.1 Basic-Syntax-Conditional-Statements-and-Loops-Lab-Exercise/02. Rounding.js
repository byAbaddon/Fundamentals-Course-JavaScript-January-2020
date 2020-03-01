function rounding(number, roundNum) {
  if (roundNum > 15) {
    roundNum = 15
  }
   console.log( parseFloat(number.toFixed(roundNum)));
}
// rounding(3.1415926535897932384626433832795, 2)
// rounding(10.5 , 3)