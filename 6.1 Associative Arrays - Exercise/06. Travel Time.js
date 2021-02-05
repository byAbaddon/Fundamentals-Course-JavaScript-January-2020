function travelTime(arr) {
  let objTravel = {}

  while (arr.length > 0) {
    let [country, city, price] = arr.shift().split(' > ')

    if (!objTravel.hasOwnProperty(country))
      objTravel[country] = {}

    if (!objTravel[country].hasOwnProperty(city))
      objTravel[country][city] = price
    else
    if (objTravel[country][city] > price)
      objTravel[country][city] = price
  }

  objTravel = Object.entries(objTravel).sort((a, b) => a[0].localeCompare(b[0]))

  for (const [key, valKey] of objTravel)
    console.log(key + ' ->', Object.entries(valKey).map(city => city.join(' -> ')).join(' '))
}

// travelTime(
//   [
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//   ])