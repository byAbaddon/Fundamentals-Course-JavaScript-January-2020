function pirates(arr) {
  arr.pop()
  let dataObj = {}

  while (true) {
    const [town, people, gold] = arr.shift().split('||').map(el => isNaN(el) ? el : Number(el))
    if (town == 'Sail') break
    if (!dataObj.hasOwnProperty(town)) {
      dataObj[town] = { 'gold': gold, 'people': people }
    } else {
      dataObj[town]['gold'] += gold
      dataObj[town]['people'] += people
    }
  }


  while (arr.length > 0) {
    const token = arr.shift().split('=>')
    const command = token.shift()
    const [town, people, gold] = token.map(el => isNaN(el) ? el : Number(el))
    if (command == 'Plunder') {
      if (dataObj.hasOwnProperty) {
        dataObj[town]['gold'] -= gold
        dataObj[town]['people'] -= people
      }
      console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)

      if (dataObj[town]['gold'] <= 0 || dataObj[town]['people'] <= 0) {
        delete dataObj[town]
        console.log(`${town} has been wiped off the map!`)
      } else {
        
      }
    }
    
    if (command == 'Prosper') {
      let addGold = people
      if (dataObj.hasOwnProperty(town)) {
        if (addGold < 0) {
          console.log(`Gold added cannot be a negative number!`)
        } else {
          dataObj[town]['gold'] += addGold
          console.log(`${addGold} gold added to the city treasury. ${town} now has ${dataObj[town]['gold']} gold.`)
        }
      }
    }       
  }


  if (dataObj) {
    console.log(`Ahoy, Captain! There are ${Object.keys(dataObj).length} wealthy settlements to go to:`)
  let sortObj = Object.entries(dataObj).sort((a, b) => a[0].localeCompare(b[0]))
    .sort((a, b) => b[1]['gold'] - a[1]['gold'])
   
    for (const key of sortObj) 
      console.log(`${key[0]} -> Population: ${key[1].people} citizens, Gold: ${key[1].gold} kg`)
    
  } else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
  }

}
  

// pirates([
// 'Tortuga||345000||1250',
// 'Santo Domingo||240000||630',
// 'Havana||410000||1100',
// 'Sail',
// 'Plunder=>Tortuga=>75000=>380',
// 'Prosper=>Santo Domingo=>180',
// 'End',
// ])

// pirates([
// 'Nassau||95000||1000',
// 'San Juan||930000||1250',
// 'Campeche||270000||690',
// 'Port Royal||320000||1000',
// 'Port Royal||100000||2000',
// 'Sail',
// 'Prosper=>Port Royal=>-200',
// 'Plunder=>Nassau=>94000=>750',
// 'Plunder=>Nassau=>1000=>150',
// 'Plunder=>Campeche=>150000=>690',
// 'End',
// ])