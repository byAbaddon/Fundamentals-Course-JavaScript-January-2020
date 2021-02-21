function solve(array) {
  let lastEl = array.pop()
  for (let index = 0; index < lastEl; index++) {
    let element = array.pop()
    array.unshift(element)
  }

  console.log(array.join(' '))
}

//solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

//-------------------------------(2)------------------------------------
function rotateArray(arr) {
  let loop = arr.pop()
  while (loop--) arr.unshift(arr.pop())
  return  arr.join(' ')
}

//console.log(rotateArray(['1', '2', '3', '4', '2']))