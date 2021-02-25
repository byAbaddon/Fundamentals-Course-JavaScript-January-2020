function treasureHunt(arr) {

  let chest = arr.shift().split('|')
  arr.pop()

  for (let line of arr) {
      let [command, ...item] = line.split(' ')

      if (command == "Loot") {
          for (let el of item) {
              if (!chest.includes(el)) {
                  chest.unshift(el)
              }
          }
          
      } else if (command == "Drop") {
          let index = Number(item)
          if (chest[index] !== undefined) {
              let el = chest[index]
              chest.splice(index, 1)
              chest.push(el)
          }
      } else {
          let count = Number(item)
          console.log(chest.splice(-count, ).join(', '))
      }
  }
  
  let sum = 0
  for (let item of chest) {
      let num = item.length
      sum += num
  }

  if (sum > 0) {
      console.log(`Average treasure gain: ${(sum / chest.length).toFixed(2)} pirate credits.`);
  } else {
      console.log("Failed treasure hunt.");
  }
}


treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!'])