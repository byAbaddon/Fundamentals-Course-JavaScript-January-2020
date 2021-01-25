function listOfProducts(arr) {
  arr.sort().forEach((el, i) => console.log(`${++i}.${el}`))
}

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])