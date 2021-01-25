function arrayManipulations(arr) {
  let arrOfNum = arr.shift().split(' ').map(Number)

  for (let i = 0; i < arr.length; i++) {
    let [command, num, index] = arr[i].split(' ')
    if (command == 'Add') arrOfNum.push(num)
    if (command == 'Remove') arrOfNum = arrOfNum.filter(el => el !== +num)
    if (command == 'RemoveAt') arrOfNum.splice(num, 1)
    if (command == 'Insert') arrOfNum.splice(index, 0, num)
  }

  return arrOfNum.join(' ')
}


//console.log(arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']))

//-------------------------------------------------------------------(2)------------------------------------------------------

function arrayManipulations(inputArr) {
  let arr = [...inputArr]
  let listOfNum = arr.shift().split(' ').map(Number)

  for (let i = 0; i < arr.length; i++) {
    let [command, num, index] = arr[i].split(' ')

    switch (command) {
      case 'Add':
        listOfNum.push(num)
        break;
      case 'Remove':
        listOfNum = listOfNum.filter(el => el !== +num)
        break;
      case 'RemoveAt':
        listOfNum.splice(num, 1)
        break;
      case 'Insert':
        listOfNum.splice(index, 0, num)
        break;
    }
  }

  console.log(listOfNum.join(' '));
}

//arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
