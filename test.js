function countStrOcc(str, word) {
  const re = new RegExp(`\\b${word}\\b`, 'gi')
  const result = str.match(re)
  console.log(result ? result.length : 0)
}

// countStrOcc("This is a word and it also is a sentence", "is")









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