function commonElements(array1, array2) {
  let arr1 = [...array1]
  let arr2 = [...array2]

  for (let i = 0; i < 100; i++) {
    arr1.includes(arr2[i]) ? console.log(arr2[i]) : null
  }
}

//commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
//commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])