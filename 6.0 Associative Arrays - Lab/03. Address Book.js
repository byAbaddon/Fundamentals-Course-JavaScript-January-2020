function addressBook(arr) {
  let addressObj = {}

  for (const token of arr) {
    const [names, address] = token.split(':')
    addressObj[names] = address
  }

  for (const [key, val] of Object.entries(addressObj).sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(key, '->', val)
  }
}

// addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'])