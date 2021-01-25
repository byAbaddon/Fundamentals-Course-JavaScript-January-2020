function phoneBook(inputArr) {
  let arr = [...inputArr]
  let phoneBook = {}

  for (const el of arr) {
    let [key, value] = el.split(' ')
    phoneBook[key] = value
  }

  for (const key in phoneBook) {
    console.log(key + ' -> ' + phoneBook[key])
  }

}

// phoneBook(
//   ['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344'
//   ])