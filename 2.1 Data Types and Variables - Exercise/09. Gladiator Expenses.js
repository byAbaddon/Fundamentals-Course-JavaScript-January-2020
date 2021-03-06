function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, amorPrice) {
  let trashedHelmet = trashedSword = trashedShield = trashedAmor = 0

  for (let i = 1; i <= lostFight; i++) {
    i % 2 === 0 ? trashedHelmet++ : null
    i % 3 === 0 ? trashedSword++ : null
    i % 6 === 0 ? trashedShield++ : null
    i % 12 === 0 ? trashedAmor++ : null
  }

  let expenses = (trashedHelmet * helmetPrice) +
                 (trashedSword * swordPrice)   + 
                 (trashedShield * shieldPrice) +
                 (trashedAmor * amorPrice)

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

//console.log(gladiatorExpenses(7, 2, 3, 4, 5))
//console.log(gladiatorExpenses(23, 12.50, 21.50, 40, 200))



