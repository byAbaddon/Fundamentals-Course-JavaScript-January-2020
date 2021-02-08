function minerTask(arr) {
  let objMine = {}
  let [metal, quantity] = ['', 0]

  while (arr.length > 0) {
    metal = arr.shift()
    quantity = +arr.shift()

    if (!objMine.hasOwnProperty(metal)) {
      objMine[metal] = quantity
    } else {
      objMine[metal] += quantity
    }
  }

  for (const [key, val] of Object.entries(objMine)) {
    console.log(key + ' -> ' + val);
  }
}

minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])