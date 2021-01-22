function dayOfWeek(day) {
  const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return day > 0 && day <= 7 ? dayList[day - 1] : 'Invalid day!'
}

// console.log(dayOfWeek(0))