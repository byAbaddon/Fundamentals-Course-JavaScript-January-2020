function triplesOfLatinLetters(n) {

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
          const char ='a'.charCodeAt(0)
        console.log( String.fromCharCode(char + i, char + j, char + k))
      }
    }
  }
}

//triplesOfLatinLetters(3)



/*Aerobatics - using recursion.  This solution not working in Judge!
                           
function triplesOfLatinLetters(loop, str) {
  if (loop === 0) {
    console.log(str);
    return
  }

  triplesOfLatinLetters(loop - 1, str + 'a')
  triplesOfLatinLetters(loop - 1, str + 'b')
  triplesOfLatinLetters(loop - 1, str + 'c')
}


triplesOfLatinLetters(3, '') 
*/