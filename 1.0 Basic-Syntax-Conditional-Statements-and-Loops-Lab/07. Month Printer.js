function monthPrinter(n) {
  const monthList = ['Error!', 'January', 'February', 'March', 'April', 'May ', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return n > 12 || n < 0 ? 'Error!' : monthList[n]
}

//console.log(monthPrinter(-3))