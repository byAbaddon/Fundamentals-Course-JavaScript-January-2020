function armies(input) {                        //copy - paste
  let armies = {}
  for (let line of input) {
      if (line.includes('arrives')) {
          line = line.split(' ')
          line.pop();
          let leader = line.join(' ')
          armies[leader] = {};
      } else if (line.includes(':')) {
          let leader = line.split(':').shift()
          if (armies.hasOwnProperty(leader)) {
              line = line.split(': ')[1]
              let [armyName, armyCount] = line.split(', ')
              armies[leader][armyName] = Number(armyCount)
          }
      } else if (line.includes('+')) {
          let [armyName, armyCount] = line.split(' + ')
          let exists = false
          let leader = ''
          for (let key in armies) {
              if (armies[key].hasOwnProperty(armyName)) {
                  exists = true
                  leader = key
                  break;
              }
          }
          if (exists) {
              armyCount = Number(armyCount)
              armies[leader][armyName] += armyCount
          }
      } else {
          line = line.split(' ')
          line.pop()
          let leader = line.join(' ')
          if (armies.hasOwnProperty(leader)) {
              delete armies[leader]
          }
      }
  }
  for (let leader in armies) {
      let totalCount = 0
      for (let army in armies[leader]) {
          totalCount += armies[leader][army]
      }
      armies[leader].totalCount = totalCount
  }
  armies = Object.entries(armies)
  armies = armies.sort((a, b) => b[1].totalCount - a[1].totalCount)
  armies.forEach(pair => {
      console.log(`${pair[0]}: ${pair[1].totalCount}`)
      pair[1] = Object.entries(pair[1]).sort((a, b) => b[1] - a[1])
      for (let armyPair of pair[1]) {
          if (armyPair[0] != 'totalCount') {
              console.log(`>>> ${armyPair[0]} - ${armyPair[1]}`)
          }
      }
  })
}

// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])