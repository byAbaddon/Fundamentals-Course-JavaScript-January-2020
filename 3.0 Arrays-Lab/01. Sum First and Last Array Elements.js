function sumFirstAndLastArrayElements(inputArray) {
  let arr = [...inputArray]  //good practice, don't touch original array
  let firstEl = arr.shift()
  let lastEl = +arr.pop()    //bad cast  + , use Number()  

  console.log(Number(firstEl) + lastEl);  //good cast Number(), but long
}

//sumFirstAndLastArrayElements(['10', '17', '22', '33'])