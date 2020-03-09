function addAndRemove(inputArr) {
  let arr = [...inputArr]
  let collection = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      collection.push(i + 1)
    } else if (arr[i] === 'remove') {
      collection.pop()
    }
  }

  console.log(collection.length === 0 ? 'Empty' : collection.join(' '));
}

// addAndRemove(['add', 'add', 'add', 'add'])
// addAndRemove(['add', 'add', 'remove', 'add', 'add'])
// addAndRemove(['remove', 'remove', 'remove'])