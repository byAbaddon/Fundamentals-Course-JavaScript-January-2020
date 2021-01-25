function partyTime(arr) {
  let listVIPGuest = []
  let listRegularGuest = []
  let invitedGuests = arr.splice(0, arr.indexOf('PARTY'))
  let arrivedGuests = arr.splice(1, Infinity)

  for (let el of arrivedGuests) {
    if (invitedGuests.includes(el)) {
      let index = invitedGuests.indexOf(el);
      invitedGuests.splice(index, 1);
    }
  }

  for (let el of invitedGuests) {
    if (/\d/gim.test(el[0])) {
      listVIPGuest.push(el);
    } else {
      listRegularGuest.push(el);
    }
  }

  console.log(listVIPGuest.length + listRegularGuest.length);
  console.log(listVIPGuest.join("\n"));
  console.log(listRegularGuest.join("\n"));
}

// partyTime(
//   ['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',

//   ])

