function spiceMustFlow(arg) {
  let yields = arg
  let totalAmount = 0
  let operatedDays = 0

  while (yields >= 100) {
    operatedDays++
    totalAmount += yields - 26
    yields -= 10
    
    yields < 100 ? totalAmount -= 26 : null
  }
  console.log(`${operatedDays}\n${totalAmount}`);
}

//spiceMustFlow(111)