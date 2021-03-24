function garage(arr) {
  let garage = {}

  for (const el of arr) {
    let [garageNum, carList] = el.split(' - ')

    if (!garage[garageNum]) {
      garage[carList] = []
    } else {
      let moreCars = garageNum
      moreCars.push(carList)
      garage[garageNum] = moreCars
    }
  }

  let sortedGarages = [...garage.entries()].sort((a, b) => a[0] - b[0])
  for (const [key, val] of sortedGarages) {
    console.log('Garage №', key)
    val.forEach(value => console.log('---', value.split(':').join(' -')))   
  }
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])


