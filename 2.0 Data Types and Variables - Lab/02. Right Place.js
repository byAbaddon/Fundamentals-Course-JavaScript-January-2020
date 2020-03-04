function rightPlace(str1, char, str2) {
  let newStr1 = str1.replace('_', char)
  console.log(newStr1 === str2 ? "Matched" : "Not Matched");
}

// rightPlace('Str_ng', 'I', 'Strong')
// rightPlace('Str_ng', 'i', 'String')