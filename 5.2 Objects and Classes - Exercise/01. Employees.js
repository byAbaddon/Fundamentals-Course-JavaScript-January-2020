function employees(inputArr) {
  let arr = [...inputArr]
  const employeesList = {}

  for (const el of arr) {
    employeesList[el] = el.length
  }

  for (const key in employeesList) {
    console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`);
  }
}

//employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])