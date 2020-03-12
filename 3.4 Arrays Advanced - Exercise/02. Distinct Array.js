function distinctArray(inputArr) {
  let arr = [...inputArr]
  console.log(Array.from(new Set(arr)).join(' '));
  //console.log(arr.filter((el, index, array) => array.indexOf(el) === index).join(' ')) //second solve
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])