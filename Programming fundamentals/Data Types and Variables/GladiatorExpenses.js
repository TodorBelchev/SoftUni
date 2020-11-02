function solve(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let counterShield = 0;
    for (let i = 1; i <= lostCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 6 === 0) {
            expenses += shieldPrice;
            counterShield++;
            if (counterShield === 2) {
                expenses += armorPrice;
                counterShield = 0;
            }
        }

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}