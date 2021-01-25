function meetings(arr) {
  meetObj = {}

  for (const token of arr) {
    [day, names] = token.split(' ')

    if (meetObj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`)
    } else {
      meetObj[day] = names
      console.log(`Scheduled for ${day}`)
    }
  }

  for (const [key, val] of Object.entries(meetObj)) {
    console.log(key, '->', val)
  }
}

// meetings(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim'])