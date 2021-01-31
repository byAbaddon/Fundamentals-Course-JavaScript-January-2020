function addAndRemove(arr) {
  let collection = []
  for (let i = 0; i < arr.length; i++)
    arr[i] == 'add' ? collection.push(i + 1) : collection.pop()

  return collection.length == 0 ? 'Empty' : collection.join(' ')
}

// console.log(addAndRemove(['add', 'add', 'add', 'add']))
// console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']))
// console.log(addAndRemove(['remove', 'remove', 'remove']))