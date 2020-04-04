function shoppingList(inputArr) {
  let arr = [...inputArr]
  let rmLast = arr.pop()
  let itemsArr = [...arr.shift().split('!')]

  class FunTools {
    constructor(itemsArr) {
      this.itemsArr = itemsArr
    }

    urgent(item) {
      if (!this.itemsArr.includes(item)) {
        this.itemsArr.unshift(item)
      }
    }

    unnecessary(item) {
      let getIndex = this.itemsArr.indexOf(item)
      if (getIndex !== -1) {
        this.itemsArr.splice(getIndex, 1)
      }
    }

    correct(oldItem, newItem) {
      let getIndex = this.itemsArr.indexOf(oldItem)
      if (getIndex !== -1) {
        this.itemsArr.splice(getIndex, 1, newItem)
      }
    }

    rearrange(item) {
      let getIndex = this.itemsArr.indexOf(item)
      if (getIndex !== -1) {
        let el = this.itemsArr[getIndex]
        this.itemsArr.splice(getIndex, 1);
        this.itemsArr.push(el)
      }
    }

  }

  const shopList = new FunTools(itemsArr)

  for (let i = 0; i < arr.length; i++) {
    let [command, item1, item2] = arr[i].split(' ')
    command = command.replace(command[0], command[0].toLowerCase())
    shopList[command](item1, item2) //call Class
  }

  console.log(shopList.itemsArr.join(', '));
}

// shoppingList([
//   'Milk!Pepper!Salt!Water!Banana',
//   'Urgent Salt',
//   'Unnecessary Grapes ',
//   'Correct Pepper Onion',
//   'Rearrange Grapes',
//   'Correct Tomatoes Potatoes',
//   'Go Shopping!'
// ])