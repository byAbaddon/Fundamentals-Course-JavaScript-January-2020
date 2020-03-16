function city(...inputArr) {
  let arr = [...inputArr]
  let objInfo = {name : arr[0], area : arr[1], population : arr[2], country : arr[3], postCode : arr[4]}

 for (const key in objInfo) {
   console.log( key + ' -> '+ objInfo[key]);
  }
}

//city("Sofia"," 492", "1238438", "Bulgaria", "1000")