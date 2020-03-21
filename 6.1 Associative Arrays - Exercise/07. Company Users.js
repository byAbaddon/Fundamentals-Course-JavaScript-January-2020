function companyUsers(inputArr) {
  let arr = [...inputArr]
  let objCompany = {}

  while (arr.length > 0) {
    let [company, id] = arr.shift().split(' -> ')
    if (!objCompany.hasOwnProperty(company)) {
      objCompany[company] = new Array(id)
    } else {
      if (!objCompany[company].includes(id)) {
         objCompany[company].push(id)
      }
     
    }

  }

  objCompany = Object.entries(objCompany).sort((a, b) => a[0].localeCompare(b[0]))
  for (const [key, value] of objCompany) {
    console.log(key);
    value.forEach(el => {
      console.log('--', el);
    });
  }
}

companyUsers(
  [
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])