function loadingBar(num) {
  let pr = "%".repeat(num / 10);
  let dot = ".".repeat(10 - num / 10);

  console.log(num / 100 !== 1 ? `${num}% [${pr}${dot}]\nStill loading...` : `100% Complete!\n[${pr}]`);
}

// loadingBar(30)
// loadingBar(100)