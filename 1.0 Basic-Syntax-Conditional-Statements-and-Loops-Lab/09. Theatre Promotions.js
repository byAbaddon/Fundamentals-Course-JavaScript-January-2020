function theatrePromotions(day, age) {
  index = 0
  days = ['Weekday', 'Weekend', 'Holiday']
  table = {
    Weekday: ['12$', '18$', '12$'],
    Weekend: ['15$', '20$', '15$'],
    Holiday: ['5$', '12$', '10$'],
  }

  if (age < 0 || age > 122) {
    return 'Error!'

  } else if (0 <= age && age <= 18) {
    index = 0
  } else if (18 < age && age <= 64) {
    index = 1
  } else if (64 < age && age <= 122) {
    index = 2
  }

  return table[day][index]
}

// console.log(theatrePromotions('Weekday', 42))
// console.log(theatrePromotions('Holiday', -12))
