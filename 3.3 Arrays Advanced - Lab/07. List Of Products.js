function listOfProducts(inputArr = []) {
  let arr = [...inputArr]
  let sortResult = arr.sort()
  sortResult.forEach((el, i) => {
    console.log(`${i+1}.${el}`);
  });
}

//listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])