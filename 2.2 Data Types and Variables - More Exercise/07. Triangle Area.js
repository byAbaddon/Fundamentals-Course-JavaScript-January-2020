function triangleArea(a, b, c) {
  let allSide = (a + b + c) / 2;
  let area = Math.sqrt(allSide * (allSide - a) * (allSide - b) * (allSide - c));
  console.log(area);
}

triangleArea(2, 3.5, 4)