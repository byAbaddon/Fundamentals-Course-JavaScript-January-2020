function bonusScoringSystem(arr) {
    arr = arr.map(Number)
    let numberOfStudents = arr.shift()
    let courseLectures = arr.shift()
    let currentBonus = arr.shift()
    let gradesObj = {'bonus': 0, 'visited': 0}

    while (arr.length > 0) {
        let studentAttendances = arr.shift()
        let totalBonus = Math.round(studentAttendances / courseLectures * (5 + currentBonus))
        if (totalBonus > gradesObj['bonus']) {
            gradesObj['bonus'] = totalBonus
            gradesObj['visited'] = studentAttendances
        }
    }

    console.log(`Max Bonus: ${gradesObj['bonus']}.`)
    console.log(`The student has attended ${gradesObj['visited']} lectures.`)
}

// bonusScoringSystem([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20'
// ])