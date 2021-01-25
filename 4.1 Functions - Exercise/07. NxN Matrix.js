function nxNMatrix(n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += n + ' '
    }
    console.log(str)
    str = ''
  }
}

// nxNMatrix(3)