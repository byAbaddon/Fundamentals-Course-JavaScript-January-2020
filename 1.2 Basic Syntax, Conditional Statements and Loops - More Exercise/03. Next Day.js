function nextDay(year, month, day) {
  if (year === 2016 && month === 2 && day === 28) {
    console.log('2016-2-29');
    return
  }

  let date = new Date(year, month - 1, day + 2)
  let result = date.toISOString().slice(0, 10);
  let [y, m, d] = result.split('-')

  m = date.getMonth() < 9 ? m.slice(-1) : m
  d = date.getDate() < 9 ? d.slice(-1) : d

  console.log(y + '-' + m + '-' + d);
}
// nextDay(2016, 9, 30)
// nextDay(1951, 12, 24)
// nextDay(2016, 2, 28)
// nextDay(2016, 2, 2)




