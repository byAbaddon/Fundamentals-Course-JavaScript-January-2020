function storage(inputArr) {
  let arr = [...inputArr]
  let map = new Map()

  while (arr.length > 0) {
    let [key, value] = arr.shift().split(' ')

    if (map.has(key)) {
      let val = map.get(key)

      value = +value + +val
    }
    map.set(key, value)
  }

  map.forEach((value, key) => {
    console.log(key + " -> " + value)

  })
}

// storage(['tomatoes 10',
//   'coffee 5',
//   'olives 100',
//   'coffee 40'
// ])