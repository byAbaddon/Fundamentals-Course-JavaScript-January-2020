function chrystalFabric(array) {                     //copy past
  let neededThickness = array[0]

  for (let i = 1; i < array.length; i++) {
      let currentThickness = array[i]

      console.log(`Processing chunk ${currentThickness} microns`)

      let cut = (number) => number / 4
      let lap = (number) => number - number * 0.2
      let grind = (number) => number - 20
      let etch = (number) => number - 2
      let xray = (number) => number + 1

      let cutCount = lapCount = grindCount = etchCount = 0

      while (currentThickness !== neededThickness) {
          while (currentThickness / 4 >= neededThickness) {
              currentThickness = cut(currentThickness);
              cutCount++
          }
          if (cutCount > 0) {
              console.log(`Cut x${cutCount}`)
              console.log(`Transporting and washing`)
              currentThickness = Math.floor(currentThickness)
          }

          while (currentThickness - currentThickness * 0.2 >= neededThickness) {
              currentThickness = lap(currentThickness)
              lapCount++
          }
          if (lapCount > 0) {
              console.log(`Lap x${lapCount}`)
              console.log(`Transporting and washing`)
              currentThickness = Math.floor(currentThickness)
          }

          while (currentThickness - 20 >= neededThickness) {
              currentThickness = grind(currentThickness)
              grindCount++
          }
          if (grindCount > 0) {
              console.log(`Grind x${grindCount}`)
              console.log(`Transporting and washing`)
              currentThickness = Math.floor(currentThickness);
          }

          while (currentThickness - 2 >= neededThickness - 1) {
              currentThickness = etch(currentThickness)
              etchCount++
          }
          if (etchCount > 0) {
              console.log(`Etch x${etchCount}`)
              console.log(`Transporting and washing`);
              currentThickness = Math.floor(currentThickness)
          }

          if (currentThickness < neededThickness) {
              currentThickness = xray(currentThickness)
              console.log(`X-ray x1`)
          }
      }
      console.log(`Finished crystal ${neededThickness} microns`)
  }
}


//------------------------------------(2)----------------------todo one Memory error

function radioCrystals(inputArr) {
  let carat = inputArr.shift()
  let crystalList = [...inputArr]
  let crystal = crystalList.shift()
  const operationCounter = {Cut: 0, Lap: 0, Grind: 0, Etch: 0}

  function washingTrunc() {
    crystal = Math.trunc(crystal)
    if (carat === crystal) {
      for (const key in operationCounter) {
        if (operationCounter[key] > 0) {
          console.log(key + ' x' + operationCounter[key])
          console.log('Transporting and washing')
        }

      }
      console.log(`Finished crystal ${carat} microns`)

      for (const el in operationCounter) { //reset values object operationCounter
        operationCounter[el] = 0
      }

      crystal = crystalList.shift()
      if (crystal !== undefined) {
        console.log(`Processing chunk ${crystal} microns`)
      }

    }
  }

  console.log(`Processing chunk ${crystal} microns`)

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

  console.log(`X-ray x1`)
  console.log(`Finished crystal ${carat} microns`)
}

//radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])