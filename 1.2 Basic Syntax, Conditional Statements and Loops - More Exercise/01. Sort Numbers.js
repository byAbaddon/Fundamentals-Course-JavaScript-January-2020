function sortNumbers(a, b, c) {
  let arr = [a, b, c]
  arr.sort((a, b) => b - a).forEach(el => {
    console.log(el);   
  })
}

// sortNumbers(-2, 1, 3)