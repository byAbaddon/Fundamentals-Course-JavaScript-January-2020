function login(arg) {
  let userName = arg.shift()
  let reversedArr = arg.map(el => el.split('').reverse().join(''))

  for (let i = 0; i < reversedArr.length; i++) {
    if (i >= 3) {
      console.log(`User ${userName} blocked!`);
      return
    } else if (reversedArr[i] !== userName) {
      console.log(`Incorrect password. Try again.`);
    } else {
      console.log(`User ${userName} logged in.`);

    }
  }
}

// login(['Acer','login','go','let me in','recA'])
// login(['sunny','rainy','cloudy','sunny','not sunny'])