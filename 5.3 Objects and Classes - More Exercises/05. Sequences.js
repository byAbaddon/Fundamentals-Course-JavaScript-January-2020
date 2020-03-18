                  

function sequences(inputArr) {      //---------------------------  ТODO ------------------------------//
  let arr = [...inputArr]
  let testArr1 = []
  let testArr2 = []
  let testArr3 = []

  let regexMatchNumbers = /(\d+\.\d+)|(-?\d+)/gim

  for (let i = 0; i < arr.length; i++) {

    let recArr = arr[i].match(regexMatchNumbers).map(Number).sort((a, b) => b - a)
    if (i === 0) {
      testArr1 = [...recArr]
    } else if (i === 1) {
      testArr2 = [...recArr]
    } else {
      testArr3 = [...recArr]
    }
  }


  Array.prototype.compare = function(array) {
    if (!array) {
      return false;
    }
    if (this.length !== array.length) {
      return false;
    }
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].compare(array[i])) {
          return false;
        }
      }
      else if (this[i] !== array[i]) {
        return false;
      }
    }
    return true;
  }


 //console.log(testArr1.compare(testArr2));

if (testArr1.compare(testArr2) === false) {
  console.log('[' + testArr2.join(', ') + ']');
  console.log('[' + testArr1.join(', ') + ']');
}

if (testArr1.compare(testArr3) === false) {
  console.log('[' + testArr3.join(', ') + ']');
}

if (testArr2.compare(testArr3) !== false) {
  console.log('[' + testArr3.join(', ') + ']');
}


}

// sequences([
// "[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"])

sequences(
  ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
  ])
