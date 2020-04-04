function nationalCourt(inputArr) {
  let arr = [...inputArr]
  let clientPeople = +arr.pop() 
  let peoplePerHour = arr.reduce((a, b) => +a + +b) 
  let breakingTime = 1
  let count = 0
  
  if (clientPeople === 0) {
    console.log(`Time needed: ${0}h.`);
    return
  }

  while (clientPeople > 0) {
    count++
    clientPeople -= peoplePerHour
    if (clientPeople <= 0) {
      break
    } else {
      breakingTime++
    }

    if (count === 3) {
      breakingTime++
      count = 0
    }
  }
 
  console.log(`Time needed: ${breakingTime}h.`);
}

// nationalCourt(['5', '6', '4', '0'])
// nationalCourt(['1', '2', '3', '45'])
// nationalCourt(['3', '2', '5', '40'])