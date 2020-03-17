function inventory(inputArr) {
  let arr = [...inputArr]
  let objHeros = {}
  let arrHero = []

  for (let i = 0; i < arr.length; i++) {
    let [name, level, items] = arr[i].split(' / ')
     objHeros ={ name, level, items : items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ') }
     arrHero.push(objHeros)
  }

  arrHero.sort((a,b) => a.level - b.level).forEach(key => {
            console.log(`Hero: ${key.name}`);
            console.log(`level => ${key.level}`);
            console.log(`items => ${key.items}`);  
  }) 
}

// inventory([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara"
//   ])