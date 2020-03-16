function convertToObject(inputArr) {
  let obj = JSON.parse(inputArr)
  for (const key in obj) {
     console.log(key + ': ' + obj[key]);
  }
}

//convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')