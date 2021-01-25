function buildWall(wall) {
  const cmB = 195
  const pesos = 1900
  let pesosPerDayArr = []


  while (wall.length > 0) {
    let allCmB = 0
    wall = wall.filter(el => el < 30)

    for (let i = 0; i < wall.length; i++) {
      if (wall[i] == 30) {
        wall.splice(i, 1)
        allCmB = 0
      }

      wall[i]++
    }

    allCmB = wall.length * cmB
    pesosPerDayArr.push(allCmB)
  }

  printPesosPerDayArr = pesosPerDayArr.join(', ').slice(0, -3)
  totalPesos = pesosPerDayArr.reduce((a, b) => a + b) * pesos
  return `${printPesosPerDayArr}\n${totalPesos} pesos`
}


// console.log(buildWall([21, 25, 28]))
// console.log(buildWall([17]))
// console.log(buildWall([17, 22, 17, 19, 17]))
