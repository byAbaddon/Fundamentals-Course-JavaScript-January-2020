function simpleCalculator(n1, n2, operator) {
  const math = { multiply : '*', divide : '/', add : '+', subtract : '-'}
  console.log(eval(n1 + math[operator] + n2));
}

//simpleCalculator(40, 8, "divide")