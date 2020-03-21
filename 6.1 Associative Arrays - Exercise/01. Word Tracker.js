function wordsTracker(inputArr) {
  let arr = [...inputArr]
  let obj = {}
  let wordForSearch = arr.shift().split(' ')

  wordForSearch.forEach(element => {
    obj[element] = 0
  });

  arr.forEach(el => {
    if (wordForSearch.includes(el)) {
      obj[el] += 1
    }
  });

  Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(el =>
    console.log(el[0] + ' - ' + el[1])
  )
}

// wordsTracker([
//   'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ])