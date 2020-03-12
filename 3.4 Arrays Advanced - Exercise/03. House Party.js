function houseParty(inputArr) {
  let arr = [...inputArr]
  let partyList = []
  let name = ''
  let isGoing = ''

  for (let i = 0; i < arr.length; i++) {
    name = arr[i].split(' ')[0]
    isGoing = arr[i].split(' ').slice(1, )

    if (isGoing.length < 3) {
      if (!partyList.includes(name)) {
        partyList.push(name)
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (partyList.includes(name)) {
        let findIndexName = partyList.lastIndexOf(name)
        partyList.splice(findIndexName, 1)
      } else{
        console.log(`${name} is not in the list!`);
      }

    }
  }

  for (const el of partyList) {
    console.log(el);
  }
}

// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
// houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])