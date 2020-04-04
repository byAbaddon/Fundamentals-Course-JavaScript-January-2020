function heartDelivery(inputArr) {           //todo Judge 90 pts
  let arr = [...inputArr]
  let rmLastEl = arr.pop()

  let neighborhood = arr.shift().split('@').map(Number)
  let houseJump = 0

  while (arr.length > 0) {
    houseJump += +arr.shift().slice(-1)
    houseJump >= neighborhood.length ? houseJump = 0 : null

    if (neighborhood[houseJump] === 0) {
      console.log(`Place ${houseJump} already had Valentine's day.`)
    } else {
      neighborhood[houseJump] -= 2
      if (neighborhood[houseJump] === 0) {
        console.log(`Place ${houseJump} has Valentine's day.`)
      }
    }
  }

  console.log(`Cupid's last position was ${houseJump}.`)
  let failedHouses = neighborhood.filter(el => el > 0).length
  console.log(failedHouses === 0 ? 'Mission was successful.' : `Cupid has failed ${failedHouses} places.`);
}

 //heartDelivery(['2@2', 'Jump 1', 'Jump 1', 'Love!'])
//  heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])


// heartDelivery([
//   '2@4@2', 'Jump 2',
//   'Jump 2', 'Jump 8',
//   'Jump 3', 'Jump 1',
//   'Love!'
// ])