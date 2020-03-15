function addAndSubtract(n1, n2, n3) {

  function sum(a, b) {
    return a + b
  }

  function subtract(ab, c) {
    return ab - c
  }

  console.log(subtract(sum(n1, n2), n3));
}

//addAndSubtract(1, 17, 30)