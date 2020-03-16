function personInfo(...inputArr) {
  let [firstName, lastName, age] = [...inputArr]
  let person = {firstName, lastName, age}
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
}

//personInfo("Peter", "Pan",  "20")  