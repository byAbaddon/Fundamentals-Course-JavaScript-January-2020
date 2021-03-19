function santaSecretHelper(arr) {
  arr.pop()
  let key = arr.shift()
  let pattern = /\@(?<name>[A-z]+)[^\@\-\!\:\>]*\!(?<status>[G])\!/g

  for (const word of arr) {
    let decryption = [...word].map(el => String.fromCharCode(el.charCodeAt() - key)).join('')
    let result = [...decryption.matchAll(pattern)]
    if (result[0] !== undefined)  console.log(result[0].groups.name) 
  }
}


// santaSecretHelper([
//   "4",
//   "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
//   "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
//   ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
//   "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
//   "DReh}e=<4lhzj1%K%",
//   "end",
// ])


//----------------------------------------(2)-------------------------------------------



function santaSecretHelper(arr) {
  let key = arr.shift()
  let word = arr.shift()

  let pattern = /\@(?<name>[A-z]+)[^\@\-\!\:\>]*\!(?<status>[G])\!/g

  while (word !== 'end') {
    let decryption = [...word].map(el => String.fromCharCode(el.charCodeAt() - key)).join('')
    let result = [...decryption.matchAll(pattern)]

    if (result[0] !== undefined) {
      console.log(result[0].groups.name);
    }

    word = arr.shift()
  }
}

// santaSecretHelper([
//   "4",
//   "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
//   "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
//   ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
//   "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
//   "DReh}e=<4lhzj1%K%",
//   "end",
// ])

// santaSecretHelper([
//   '3',
//   'CNdwhamigyenumje$J$',
//   'CEreelh-nmguuejnW$J$',
//   'CVwdq&gnmjkvng$Q$',
//   'end',
// ])