function partyTime(arr) {
  let invitedGuests = arr.splice(0, arr.indexOf('PARTY'))
  let arrivedGuests = arr.splice(1, Infinity)

  for (let el of arrivedGuests)
    if (invitedGuests.includes(el))
      invitedGuests.splice(invitedGuests.indexOf(el), 1)

  let vipGuest = invitedGuests.filter(el => (/\d/.test(el[0])))
  let regularGuest = invitedGuests.filter(el => !(/\d/.test(el[0])))

  console.log(vipGuest.length + regularGuest.length)
  console.log(`${vipGuest.join('\n')}\n${regularGuest.join('\n')}`)
}

partyTime(
  ['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
  ])