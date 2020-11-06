function solve(input) {
    let health = 100;
    let coins = 0;
    let floors = input.toString().split(`|`);
    let isClear = true;
    for (let i = 0; i < floors.length; i++) {
        let tokens = floors[i].split(` `);
        if (tokens[0] === `potion`) {
            let bonusHealth = tokens[1];
            if (bonusHealth > 100 - health) {
                bonusHealth = 100 - health;
            }
            health += Number(bonusHealth);
            console.log(`You healed for ${bonusHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (tokens[0] === `chest`) {
            let bonusCoins = tokens[1];
            coins += Number(bonusCoins);
            console.log(`You found ${bonusCoins} coins.`);
        } else {
            let monster = tokens[0];
            let dmg = tokens[1];
            if (health > dmg) {
                console.log(`You slayed ${monster}.`);
                health -= dmg;
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                isClear = false;
                break;
            }
        }
    } if (isClear) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}