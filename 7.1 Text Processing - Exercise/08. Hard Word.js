function hardWords(input) {
  let arrText = input[0].split(' ').map(el => {
    if (el.includes('_')) el = input[1].filter(word => word.length == el.length)
    return el
  })

  return arrText.join(' ')
}

// hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//   ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
// ])

//-------------------------------------------------------(2)---------------------------------------------

function hardWords(inputArr) {
  let arrText = inputArr[0].split(' ')
  let words = inputArr[1]

  let collectionArr = []

  for (const el of arrText) {
    if (el.includes('_')) {
      let searchingWord = words.filter(w => w.length === el.length)
      collectionArr.push(searchingWord)
    } else {
      collectionArr.push(el);
    }
  }

  console.log(collectionArr.join(' '));
}

// hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//   ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
// ])