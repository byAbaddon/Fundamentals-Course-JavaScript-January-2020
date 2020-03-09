function rotateArray(inputArr) {
  let arr = [...inputArr]
  let num = arr.pop()
  for (let i = 0; i < num; i++) {
    let el = arr.pop()
    arr.unshift(el)
  }
  
  console.log(arr[0] !== 'remove' ? arr.join(' ') : 'Empty');
}

// rotateArray(['1', '2', '3', '4', '2'])
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
// rotateArray(['remove', 'remove', 'remove'])