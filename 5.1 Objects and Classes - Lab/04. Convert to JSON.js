function convertToJSON(...inputArr) {
  let [name, lastName, hairColor] = [...inputArr]
  let obj = { name, lastName, hairColor}
  let objToStr = JSON.stringify(obj)
  console.log(objToStr); 
}

//convertToJSON('George', 'Jones', 'Brown')