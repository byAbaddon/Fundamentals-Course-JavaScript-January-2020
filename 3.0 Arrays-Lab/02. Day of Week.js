function dayOfWeek(day) {
  const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  console.log(day > 0 && day <= 7 ? dayList[day - 1] : 'Invalid day!');
}

//dayOfWeek(0)