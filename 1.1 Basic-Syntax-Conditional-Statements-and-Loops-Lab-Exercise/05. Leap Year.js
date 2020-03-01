function leapYear(arg) {

  if (arg % 4 === 0 && arg % 100 !== 0 || arg % 400 === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

// leapYear(1984)
// leapYear(2003)
// leapYear(4)