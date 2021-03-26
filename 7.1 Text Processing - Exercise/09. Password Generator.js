function passwordGenerator(arr) {
  let chars = [...arr.pop().toUpperCase()]
  let text = [...arr].join('')
  let password = []

  for (let index = 0; index < text.length; index++) {
    if (/[aeiou]/.exec(text[index])) {
      password.push(chars[0])
      chars.push(chars.shift())
      continue
    }

    password.push(text[index])
  }

  return `Your generated password is ${password.reverse().join('')}`
}

// console.log(passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']))


//---------------------------------------------------------(2)----------------------------

function passwordGenerator(arr) {
  let text = Array.from(arr[0] + arr[1])
  let chars = Array.from(arr[2].toUpperCase())
  let password = []

  for (let index = 0; index < text.length; index++) {
    if (/[aeiou]/.test(text[index])) {
      password.push(chars[0])
      chars.push(chars.shift())
      continue
    }
    
    password.push(text[index])
  }

  return `Your generated password is ${password.reverse().join('')}`
}

// console.log(passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']))