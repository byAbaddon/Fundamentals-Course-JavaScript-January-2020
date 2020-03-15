function radioCrystals(inputArr) {
  let carat = inputArr.shift()
  let crystalList = [...inputArr]
  let crystal = crystalList.shift()
  const operationCounter = { Cut: 0,   Lap: 0,   Grind: 0,   Etch: 0 }

  function washingTrunc() {
    crystal = Math.trunc(crystal)
    if (carat === crystal) {
      for (const key in operationCounter) {
        if (operationCounter[key] > 0) {
          console.log(key + ' x' + operationCounter[key]);
          console.log('Transporting and washing');
        }

      }
      console.log(`Finished crystal ${carat} microns`);
   
        for (const el in operationCounter) {  //reset values object operationCounter
          operationCounter[el] = 0
        }

      crystal = crystalList.shift()
      if (crystal !== undefined) {
        console.log(`Processing chunk ${crystal} microns`);
      }
      
    }
  }

  console.log(`Processing chunk ${crystal} microns`);

  while (carat !== crystal) {

    if (crystal === undefined) {
      return
     }

    while (crystal / 4 >= carat) {
      crystal /= 4
      operationCounter.Cut++
      washingTrunc()
    }

    while (crystal * 0.80 >= carat) {
      crystal *= 0.80
      operationCounter.Lap++
      washingTrunc()
    }

    while (crystal - 20 >= carat) {
      crystal -= 20
      operationCounter.Grind++
      washingTrunc()
    }

    while (crystal - 2 >= carat) {
      crystal -= 2
      operationCounter.Etch++
      washingTrunc()
    }

    if (crystal + 1 === carat + 2) {
      crystal += 1
      washingTrunc()
    }

  }

  console.log(`X-ray x1`);
  console.log(`Finished crystal ${carat} microns`);
}

//radioCrystals([1375, 50000])
radioCrystals([1000, 4000, 8100]);