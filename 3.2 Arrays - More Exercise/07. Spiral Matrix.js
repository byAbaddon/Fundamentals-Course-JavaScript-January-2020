function spiralMatrix(rowLength, colLength) {
  let matrix = []
  for (let i = 0; i < rowLength; i++) {
    matrix.push(new Array(colLength))
  }

  let num = 0;
  for (let i = 0; i < Math.floor(rowLength / 2); i++) {
    for (let j = 0 + i; j < matrix[i].length - i; j++) {
      num++
      matrix[i][j] = num
    }
    for (let row = 1 + i; row < matrix.length - i; row++) {
      num++
      matrix[row][colLength - 1 - i] = num
    }
    for (let lr = colLength - 2 - i; lr >= 0 + i; lr--) {
      num++
      matrix[rowLength - 1 - i][lr] = num;
    }
    for (let row = colLength - 2 - i; row >= 1 + i; row--) {
      num++
      matrix[row][i] = num
    }
  }

  if (rowLength & 1 && colLength & 1) {
    matrix[Math.floor(rowLength / 2)][Math.floor(colLength / 2)] = num + 1
  }


  matrix.forEach(row => {
    console.log(row.join(' '))
  })
}



spiralMatrix(3, 3)