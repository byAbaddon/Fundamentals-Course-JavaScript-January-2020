function sortAnArrayBy2Criteria(inputArr = []) {
  let arr = [...inputArr]
  console.log(arr.sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b)).join('\n'))
}

//sortAnArrayBy2Criteria(["alpha", "beta", "gamma"])
//sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default', ])