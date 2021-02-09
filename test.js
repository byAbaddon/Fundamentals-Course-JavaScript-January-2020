function carWash(arr) {
  let value = 0

  for (const el of arr) {
    switch (el) {
      case 'soap':
        value += 10;
        break;
      case 'water':
        value *= 1.20;
        break;
      case 'vacuum cleaner':
        value *= 1.25;
        break;
      case 'mud':
        value *= 0.90;
        break;
    }
  }

  return `The car is ${value.toFixed(2)}% clean.`
}


console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))



)