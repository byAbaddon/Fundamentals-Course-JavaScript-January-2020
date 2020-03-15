function perfectNumber(n) {
  let num = n
  let sumDivisor = 0;

  for (let i = 0; i < num; i++) {
    num % i === 0 ? sumDivisor += i : null
  }

  console.log(num === sumDivisor ? "We have a perfect number!" : "It's not so perfect.")
}

//perfectNumber(28)