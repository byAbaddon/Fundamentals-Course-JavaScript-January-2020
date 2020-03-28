function starEnigma(inputArr) {
  let arr = [...inputArr]
  let loop = arr.shift()
  let arrTransformText = []
  let arrEndText = []

  while (loop !== 0) {
    let text = arr.shift()
    let decryptionKey = text.match(/[star]/gim).length
    arrTransformText.push([...text].map(el => String.fromCharCode(el.charCodeAt() - decryptionKey)).join(''))
    loop--
  }


  let pattern = /(@(?<planetName>[A-Z]{1}\w+):(?<population>\d+)!(?<attackType>\w{1})!->(?<soldiers>\d+))/
  for (const el of arrTransformText) {
    let result = [...el.matchAll(pattern)]
    // console.log(result[0].groups.planetName);
    let attackedPlanet = 0
    let destroyedPlanet = 0
    if (result[0].groups.planetName.length > 0 && result[0].groups.population.length > 0 && result[0].groups.attackType.length > 0 && result[0].groups.soldiers.length > 0) {
      attackedPlanet++
      destroyedPlanet++
      if (attackedPlanet > 0) {
        arrEndText.push(`Attacked planets: ${attackedPlanet}`)
        arrEndText.push(result[0].groups.planetName)
        // console.log(`Attacked planets: ${attackedPlanet}\n-> ${result[0].groups.planetName}`);
      } else{
      arrEndText.push('Attacked planets: ', attackedPlanet)
      arrEndText.push(result[0].groups.planetName)
      arrEndText.push('Destroyed planets: ', attackedPlanet)
      arrEndText.push(result[0].groups.planetName)
    }
  }
  }



  console.log(arrEndText);

}
starEnigma([
  2,
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR',
])