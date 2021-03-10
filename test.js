function keys(input) {
  let actions = {
    Contains(rawKey, pattern) {
      if (rawKey.includes(pattern)) {
        console.log(`${rawKey} contains ${pattern}.`);
      } else {
        console.log(`Substring not found!`);
      }
      return rawKey;
    },
    Flip(rawKey, type, start, end) {
      [start, end] = [Number(start), Number(end)];
      // let first = rawKey.substring(0, start);
      // let second = rawKey.substring(start, end);
      // let third = rawKey.substring(end);
      // if (type == "Upper") {
      //   second = second.toLocaleUpperCase();
      // } else {
      //   second = second.toLocaleLowerCase();
      // }
      // let result = first + second + third;
      if (type == 'Upper') {
        rawKey = rawKey.slice(0, start) + rawKey.slice(start, end).toUpperCase() + rawKey.slice(end, )
      } else { //Lower
        rawKey = rawKey.slice(0, start) + rawKey.slice(start, end).toLowerCase() + rawKey.slice(end, )
      }
      console.log(rawKey);
      return rawKey;
    },
    Slice(rawKey, start, end) {
      [start, end] = [Number(start), Number(end)];
      // let first = rawKey.substring(0, start);
      // let second = rawKey.substring(start, end);
      // let third = rawKey.substring(end);
      const cutElements = rawKey.slice(start, end)
      rawKey = rawKey.replace(cutElements, '')
    
      console.log(rawKey);
      return rawKey;
    },
  };
  let rawKey = input.shift();
  let line;
  
  while ((line = input.shift()) != "Generate") {
    let [actionName, ...parrams] = line.split(">>>");
 
    rawKey = actions[actionName](rawKey, ...parrams);
  }
  console.log(`Your activation key is: ${rawKey}`);
}


keys([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
])


keys([
'134softsf5ftuni2020rockz42',
'Slice>>>3>>>7',
'Contains>>>-rock',
'Contains>>>-uni-',
'Contains>>>-rocks',
'Flip>>>Upper>>>2>>>8',
'Flip>>>Lower>>>5>>>11',
'Generate',
])



// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// 2
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz
// 134sf5ftuni2020rockz42
// 3
// Substring not found!
// 134SF5FTuni2020rockz42
// 134SF5ftuni2020rockz42
// Your activation key is: 134SF5ftuni2020rockz42










// // Няма нищо кой знае какво сложно в така наречените:
// // Обекти / Речници / Асоциативни масиви

// // Представете си, че сте треньор на един спортен тим и си подреждате състава;
//  tim = {  1 : 'Гошо - Вратарчето' , 2 : 'Един от ония двамата', 8 : 'Барбуков-опа-Бербатов'}

// //  Кой играеше под номер 1 ?
// console.log(tim[1]) // Гошо - Вратарчето

// // Сменяме Барбуков с Роналдо
// console.log(tim[8] = 'Роналдо') // Роналдо

// // Червен картон - гонят номер 2
// console.log(delete tim[2])

