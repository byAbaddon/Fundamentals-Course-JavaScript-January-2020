function schoolRegister(arr) {
   let schoolRegister = {}

   for (let line of arr) {
      let tokens = line.split(', ')
      let grade = +tokens[1].split(': ')[1] + 1
      let name = tokens[0].split(': ')[1]
      let score = +tokens[2].split(': ')[1]

      if (score >= 3) {
         let student = { name, score }
         if (!schoolRegister.hasOwnProperty(grade)) {
            schoolRegister[grade] = []
         }
         schoolRegister[grade].push(student)
      }
   }

   let sortedGrades = Object.keys(schoolRegister).sort((a, b) => a - b)

   for (let grade of sortedGrades) {
      let students = schoolRegister[grade]
      console.log(`${grade} Grade`)
      console.log(`List of students: ${students.map(s => s.name).join(', ')}`)
      console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`)
      console.log()
   }

   function average(arr) {
      return arr.reduce((a, b) => a + b, 0) / arr.length
   }
}




// schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ])



//--------------------------------------------------------------------TODO
 
// function schoolRegister(inputArr) {   
//    let arr = [...inputArr]
//    let register = {'Grade': { 'List of students:': [], 'average': 0}}
//    let loop = arr.length
//    let increase = 1

//    let result = arr.toString().replace(/(\d+\.\d+)/gim , '')
//    result = result.match(/\d+/gim).map(Number)
//    let minClass = Math.min(...result) - 1

//    while (loop--) {

//       for (let i = 0; i < arr.length; i++) {

//          let [a, b, c] = arr[i].split(',')
//          let [name, grade, average] = [a.split(':'), b.split(': '), c.split(':')]


//          if (+grade[1] === minClass + increase && average[1] >= 3) {
//             register['Grade']['List of students:'].push(name[1])
//             register['Grade']['average'] += +average[1]
//          }
//       }
//       for (const key in register) {
//          let numberOfStudents = register[key]['List of students:'].length

//          if (numberOfStudents === 0) {
//             return
//          }
//          console.log(8 + increase + ' ' + key + ' ');
//          console.log('List of students:' + register[key]['List of students:'].join());
//          console.log('Average annual grade from last year: ' + (register[key]['average'] / numberOfStudents).toFixed(2))
//          console.log();
//        }

//       register = {'Grade': {'List of students:': [],'average': 0}
//       }

//       increase++
//   }
// }
