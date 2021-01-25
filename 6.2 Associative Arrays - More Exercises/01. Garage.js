function garage(inputArr) {
  let arr = [...inputArr]
  let garage = new Map()

  for (const el of arr) {
    let [garageNum, carList] = el.split(' - ')

    if (!garage.has(garageNum)) {
      garage.set(garageNum, [carList])
    } else {
      let moreCars = garage.get(garageNum);
      moreCars.push(carList)
      garage.set(garageNum, moreCars)
    }
  }


  for (const [key, val] of garage) {
    console.log('Garage №', key)
    val.forEach(value => {
      console.log('---', value.split(':').join(' -'))
    })
  }
}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])