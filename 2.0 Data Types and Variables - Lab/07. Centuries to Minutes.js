function centuriesToMinutes(input) {
  let centuriesNumber = input
  let years = centuriesNumber * 100
  let days = parseInt(years * 365.2422)
  let hours = days * 24
  let minutes = hours * 60

  return `${centuriesNumber} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
}

// console.log(centuriesToMinutes(1))
// console.log(centuriesToMinutes(5))