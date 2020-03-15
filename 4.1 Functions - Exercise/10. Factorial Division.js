function factorialDivision(r1, r2) {

  let factorial = (num) => {
    if (num === 1) {
      return 1
    }
     return num * factorial(num - 1)
  }

  let recOneResult =  factorial(r1)
  let recTwoResult =  factorial(r2)

  console.log((recOneResult / recTwoResult ).toFixed(2));
}

//factorialDivision(5, 2)
