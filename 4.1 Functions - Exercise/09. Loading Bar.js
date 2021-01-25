function loadingBar(num) {
  let pr = "%".repeat(num / 10);
  let dot = ".".repeat(10 - num / 10);

  return num / 100 !== 1 ? `${num}% [${pr}${dot}]\nStill loading...` : `100% Complete!\n[${pr}]`
}

//console.log(loadingBar(30))
//console.log(loadingBar(100))