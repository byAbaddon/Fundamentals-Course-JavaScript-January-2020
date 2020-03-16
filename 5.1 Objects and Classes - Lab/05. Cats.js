function cats(inputArr) {
  let arr = [...inputArr]

  class Cat {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let [name, age] = arr[i].split(' ')
    const cat = new Cat(name, age)
    cat.meow()
  }
}

//cats(['Mellow 2', 'Tom 5'])