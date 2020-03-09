function tseamAccount(inputArr) {
  let arr = [...inputArr]
  let gameArr = arr.shift().split(' ')

  for (let i = 0; i < arr.length; i++) {
    let [command, game] = arr[i].split(' ')

    switch (command) {
      case 'Install':
        if (!gameArr.includes(game)) {
          gameArr.push(game)
        }
        break;
      case 'Uninstall':
        if (gameArr.includes(game)) {
          gameArr = gameArr.filter(el => el !== game)
        }
        break;
      case 'Update':
        if (gameArr.includes(game)) {
          let findIndexGame = gameArr.indexOf(game)
          gameArr.splice(findIndexGame, 1)
          gameArr.push(game)
        }
        break;
      case 'Expansion':
        let getGameFromFirstPart = game.split('-')[0]
        let getGameFromSecondPart = game.split('-')[1]
        if (gameArr.includes(getGameFromFirstPart)) {
          let findIndexGame = gameArr.indexOf(getGameFromFirstPart)
          gameArr.splice(findIndexGame + 1, 0, getGameFromFirstPart + ':' + getGameFromSecondPart)
        }
        break;
      case 'Play!':
        console.log(gameArr.join(' '));
        break;
    }
  }
}

// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
// tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])