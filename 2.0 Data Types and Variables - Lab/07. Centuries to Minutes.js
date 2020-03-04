function centuriesToMinutes(input) {
  let centuriesNumber = input
  let years = centuriesNumber * 100
  let days = parseInt(years * 365.2422)
  let hours = days * 24
  let minutes = hours * 60

  console.log(`${centuriesNumber} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

// centuriesToMinutes(1)
// centuriesToMinutes(5)