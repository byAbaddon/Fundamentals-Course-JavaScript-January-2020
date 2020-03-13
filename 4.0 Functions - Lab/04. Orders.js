function orders(product, price) {
  const items = { coffee : 1.50, water: 1.00, coke: 1.40, snacks: 2.00  }
  console.log((items[product] * price).toFixed(2));
}

//orders('water', 5)