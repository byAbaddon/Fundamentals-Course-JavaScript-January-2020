function matchFullName(str) {
  let result = str[0].match(/(\b[A-Z][a-z]+ [A-Z][a-z]+)/g)
  console.log(result.join(' '));
}

//matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"])