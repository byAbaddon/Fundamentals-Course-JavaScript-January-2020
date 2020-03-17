function storeProvision(...inputArr) {
  let mergerArr = inputArr.flat(Infinity)

  let objProducts = {}

  for (let i = 0; i < mergerArr.length; i += 2) {
    let product = mergerArr[i]
    let quantity = mergerArr[i + 1]

    if (objProducts.hasOwnProperty(product)) {
      let sum = +objProducts[product] + +quantity
      objProducts[product] = sum
    } else {
      objProducts[product] = +quantity
    }
  }
  for (const key in objProducts) {
    console.log(key + ' -> ' + objProducts[key]);
  }
}

// storeProvision(
//   ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//   ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])