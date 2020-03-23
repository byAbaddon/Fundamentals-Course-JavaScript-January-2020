function pascalCaseSplitter(str) {
  //let result = str.match(/([A-Z][^A-Z]+)/g)  //WTF fucking Judge
  //console.log(result.join(', '));
  let result = str[0];

  for (let i = 1; i < str.length - 1; i++) {

    let firstChar = str[i + 1].charCodeAt(0);
    if (firstChar >= 65 && firstChar <= 90) {
      result += `${str[i]}, `;
    } else {
      result += str[i];
    }
  }

  result += str[str.length - 1]
  console.log(result);
}

//pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// pascalCaseSplitter('This, Is, S   6#o, Annoying, To12, D2o_')