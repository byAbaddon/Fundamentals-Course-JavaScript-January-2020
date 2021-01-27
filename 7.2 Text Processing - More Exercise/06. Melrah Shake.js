function merlahShake(input) { //------------------------------------copy - paste

  let text = input.shift();
  let pattern = input.shift();

  while (pattern.length > 0) {
    let firstMatch = text.indexOf(pattern);
    let lastMatch = text.lastIndexOf(pattern);
    if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
      let firstRemove = text.substr(0, firstMatch);
      let lastRemove = text.substr(firstMatch + pattern.length);
      text = firstRemove + lastRemove;
      lastMatch = text.lastIndexOf(pattern);
      firstRemove = text.substring(0, lastMatch);
      lastRemove = text.substring(lastMatch + pattern.length);
      text = firstRemove + lastRemove;
      let pat1 = pattern.substring(0, pattern.length / 2);
      let pat2 = pattern.substring(pattern.length / 2 + 1);
      pattern = pat1 + pat2;
      console.log('Shaked it.');
    } else {
      break;
    }
  }
  console.log('No shake.');
  console.log(text);
}
// melrahShake(['astalavista baby', 'sta'])
// melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])



//-------------------------------------------(2)---------------------60pts-----------TODO

function melrahShake(arr) {
  let [str, pattern] = [...arr]

  while (pattern.length > 0) {
    let regex = new RegExp(`${pattern}`, 'g')
    str.match(regex)
    console.log('Shaked it.')

    str = str.replace(regex, '')
    pattern = pattern.replace(pattern[Math.floor(pattern.length / 2)], '')

  }

  console.log(`No shake.\n${str}`)
}

melrahShake(['astalavista baby', 'sta'])
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])