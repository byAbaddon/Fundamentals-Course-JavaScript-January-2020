function starEnigma(input) {
    input.shift()
    let counter = 0
    let decrypted = ''

    let attacked = []
    let destroyed = []
    for (let string of input) {
        for (let symbol of string) /[starSTAR]/.test(symbol) ? counter++ : null
        for (let symbol of string) {
            let newSymbol = String.fromCharCode(symbol.charCodeAt(0) - counter)
            decrypted += newSymbol
        }

        let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:[^@\-!:>]*?[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->/gm
        let result = pattern.exec(decrypted)

        while (result) {
            let planetName = result.groups['planetName']
            let attackType = result.groups['attackType']

            if (attackType === 'A') attacked.push(planetName)
            else destroyed.push(planetName) //'D'
            result = pattern.exec(decrypted)
        }

        counter = 0
        decrypted = ''
    }

    console.log(`Attacked planets: ${attacked.length}`)
    attacked.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.sort((a, b) => a.localeCompare(b)).forEach(elem => console.log(`-> ${elem}`))
}

// starEnigma([2, 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])