function lastKNumbersSequence(n1, k1) {
  let n = n1
  let k = k1
  let result = [1];

  for (let i = 1; i < n; i++) {
    let startIndex = Math.max(0, i - k);
    let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
    result.push(currentElement);
  }

  console.log(result.join(" "));
}

//lastKNumbersSequence(6, 3)