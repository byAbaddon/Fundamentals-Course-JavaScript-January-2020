function login(arr) {
  let username = arr.shift();
  let password = username.split('').reverse().join('')
  let attempt = 0
  let testPass = arr.shift()

  while (testPass != password && attempt++ < 3) {
    console.log(`Incorrect password. Try again.`)
    testPass = arr.shift()
  }

  console.log(`User ${username} ${testPass == password ? 'logged in.' : 'blocked!'}`)
}

//login(['Acer','login','go','let me in','recA'])
//login(['sunny','rainy','cloudy','sunny','not sunny'])
