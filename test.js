function garage(arr) {
  let garagesObj = {}

  for (const el of arr) {
    let [garageNum, carList] = el.split(' - ')

    if (!garagesObj[garageNum]) {
      garagesObj[garageNum] = []
    }
    garagesObj[garageNum].push(carList)
  }

  for (const [key, val] of Object.entries(garagesObj)) {
    console.log('Garage №', key)
    val.forEach(el => console.log('---', el.split(': ').join(' - ')))
  }
}

// garage([
//   '1 - color: blue, fuel type: diesel',
//   '1 - color: red, manufacture: Audi',
//   '2 - fuel type: petrol',
//   '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ])