// FUCKING JUDGE UNI-TEST    SOLUTIONS NOT WORKING CORRECT  !!!

//1)
function magicSum(inputArr) {
  let num = +inputArr.pop()
 // let listNum = inputArr[0].split(' ').map(Number)   //judge error  split() not a function ????
 let arr =  Array.from(inputArr)
 let listNum = arr.toString().split(' ').map(el => Number(el));
 let collection = []
  for (let row = 0; row < listNum.length - 1; row++) {
    for (let col = row + 1; col < listNum.length; col++) {

      if (listNum[row] + listNum[col] === num) {
       console.log(listNum[row], listNum[col]);
       
      }
    }
  }

  for (let i = 0; i < collection.length ; i++) {
    console.log([`collection.splice(0,2).join(' ')`]);
  }
}


//1 7 6 2 
//magicSum(['1 7 6 2 19 23', '8'])
// magicSum(['14 20 60 13 7 19 8', '27'])
//magicSum(['1 2 3 4 5 6', '6'])

//2)
function magicSum(inputArr) {
  let num = +inputArr.pop()
 // let listNum = inputArr[0].split(' ').map(Number)   //judge error  split() not a function
 let arr =  Array.from(inputArr)
 let listNum = arr.toString().split(' ').map(el => Number(el));
 let collection = []
  for (let row = 0; row < listNum.length - 1; row++) {
    for (let col = row + 1; col < listNum.length; col++) {

      if (listNum[row] + listNum[col] === num) {
       collection.push(listNum[row], listNum[col]);
      }
    }
  }

  for (let i = 0; i < collection.length ; i++) {
    console.log(collection.splice(0,2).join(' '));
  }
}

//1 7 6 2 
//magicSum(['1 7 6 2 19 23', '8'])
// magicSum(['14 20 60 13 7 19 8', '27'])
//magicSum(['1 2 3 4 5 6', '6'])