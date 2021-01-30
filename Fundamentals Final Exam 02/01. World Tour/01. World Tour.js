function worldTour(arr) {
  arr.pop()
  let destination = arr.shift()

  while (arr.length > 0) {
    const [command, arg1, arg2] = arr.shift().split(':').map(el => isNaN(el) ? el : Number(el))

    if (command === 'Add Stop') {
      let index = arg1
      let country = arg2
      if (index >= 0 && index < destination.length)
        destination = destination.slice(0, index) + country + destination.slice(index)
    }

    if (command === 'Remove Stop') {
      let start = arg1
      let end = arg2
      if (start >= 0 && end < destination.length) {
        let cutPart = destination.slice(start, end + 1)
        destination = destination.replace(cutPart, '')
      }
    }

    if (command == 'Switch') {
      let oldString = arg1
      let newString = arg2
      if (destination.includes(oldString))
        destination = destination.replace(oldString, newString)
    }

    console.log(destination)
  }

  return `Ready for world tour! Planned stops: ${destination}`
}

// console.log(worldTour([
//   'Hawai::Cyprys-Greece',
//   'Add Stop:7:Rome',
//   'Remove Stop:11:16',
//   'Switch:Hawai:Bulgaria',
//   'Travel',
// ]))