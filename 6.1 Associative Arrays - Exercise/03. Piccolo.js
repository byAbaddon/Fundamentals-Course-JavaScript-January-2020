function piccolo(inputArr) {
  let arr = [...inputArr]
  let parkingLotArr = new Set()

  while (arr.length > 0) {

    let [command, car] = arr.shift().split(', ')
    if (command === 'IN') {
      parkingLotArr.add(car)
    } else if (command === 'OUT') { 
      parkingLotArr.delete(car)
    }
  }

  parkingLotArr.size === 0 ? console.log('Parking Lot is Empty') : null

  let sortedAscendingByNumber = Array.from(parkingLotArr).sort((a,b) => a.localeCompare(b))
  sortedAscendingByNumber.forEach(el => {console.log(el); });
}

// piccolo(
//   ['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
//   ])

  // piccolo(['IN, CA2844AA',
  // 'IN, CA1234TA',
  // 'OUT, CA2844AA',
  // 'OUT, CA1234TA'])