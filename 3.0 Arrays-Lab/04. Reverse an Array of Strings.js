function reverseAnArrayOfStrings(inputArray) {
  //console.log(inputArray.reverse().join(' '));  //fast solution in one row !!!
  let arr = [...inputArray]
  let str = ' '
   while (arr.length > 0) {
     str += arr.pop() + ' '
   }
   console.log(str);
}

// reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
// reverseAnArrayOfStrings(['33', '123', '0', 'dd'])