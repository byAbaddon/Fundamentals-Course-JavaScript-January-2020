function palindromeIntegers(arr) {

  for (let el of arr) {
    let normal = el.toString()
    let reversed = el.toString().split('').reverse().join('')

    console.log(normal === reversed ? true : false)
  }
}

// palindromeIntegers([32, 2, 232, 1010])