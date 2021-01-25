function leapYear(arg) {
  return arg % 4 === 0 && arg % 100 !== 0 || arg % 400 === 0 ? 'yes' : 'no'
}

//console.log(leapYear(1984))
//console.log(leapYear(2003))
//console.log(leapYear(4))