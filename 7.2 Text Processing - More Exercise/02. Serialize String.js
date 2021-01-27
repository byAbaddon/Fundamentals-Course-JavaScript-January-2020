function serializeString(arr) {
  let str = arr[0]
  let uniqueChar = new Set(str)
  let charObj = {}  
  uniqueChar.forEach(key => {return charObj[key] = []})
  
  for (let i = 0; i < str.length; i++) {
      if (charObj.hasOwnProperty(str[i]))
        charObj[str[i]].push(i)  
  }

  for (const [key, val] of Object.entries(charObj)) {
    console.log(`${key}:${val.join('/')}`)
  }
}

// serializeString(['abababa'])
// serializeString(['avjavamsdmcalsdm'])