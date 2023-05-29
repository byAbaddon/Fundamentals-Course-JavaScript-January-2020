function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  const trashedHelmets = ~~(lostFights / 2) * helmetPrice
  const trashedSwords = ~~(lostFights / 3) * swordPrice
  const trashedShields = ~~(lostFights / 6) * shieldPrice
  const trashedArmors = ~~(lostFights / 12) * armorPrice
  const expenses = trashedHelmets + trashedSwords + trashedShields + trashedArmors

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

// console.log(gladiatorExpenses(7, 2, 3, 4, 5))
//--------------------------------------------------(2)--------------------------------------------------

function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  const trashedHelmet = ~~(lostFight / 2)
  const trashedSword = ~~(lostFight / 3)
  const trashedShield = ~~(lostFight / 6)
  const trashedArmor = ~~(lostFight / 12)

  const expenses = (trashedHelmet * helmetPrice) +
                   (trashedSword * swordPrice) +
                   (trashedShield * shieldPrice) +
                   (trashedArmor * armorPrice)

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

//console.log(gladiatorExpenses(7, 2, 3, 4, 5))

//-------------------------------------------------------(3)------------------------------------------------

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



