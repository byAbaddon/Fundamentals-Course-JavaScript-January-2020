function foreignLanguages(arg) {

  if (arg === 'USA' || arg === 'England') {
    result = 'English'
  } else if (arg === 'Spain' || arg === 'Argentina' || arg === 'Mexico') {
    result = 'Spanish'
  } else {
    result = 'unknown'
  }
  return result
}

// console.log(foreignLanguages('Germany'))
// console.log(foreignLanguages('USA')   )