function sortNumbers(...arr) {
    return arr.sort((a, b) => b - a).join('\n')
}   

//console.log(sortNumbers(-2, 1, 3))

//--------------------------------------(2)-------------------


function sortNumbers(...arr) {
  arr.sort((a, b) => b - a).forEach(el => console.log(el))
}

// sortNumbers(-2, 1, 3)