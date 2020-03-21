function oddOccurrences(inputArr) {
  let arr = inputArr.toString().toLowerCase().split(' ')
  let arrCollection = []
  while (arr.length > 0) {

    let extractWord = arr[0]
    let result = arr.filter(el => el === extractWord).length
    if ((result & 1) !== 0) {
      arrCollection.push(extractWord);
    }
    arr = arr.filter(el => el !== extractWord)
  }
   console.log(arrCollection.join(' '));
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')