function solve(input) {
    let rooms = input.split(`|`);
    let health = 100;
    let bitcoins = 0;
    let isDead = false;
    for (const index in rooms) {
        if (isDead) {
            break;
        }
        let tokens = rooms[index].split(` `);
        let command = tokens[0];
        let num = Number(tokens[1]);
        switch (command) {
            case `potion`:
                if (health + num > 100) {
                    num = 100 - health;
                }
                health += num;
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case `chest`:
                bitcoins += num;
                console.log(`You found ${num} bitcoins.`);
                break;
            default:
                if (health - num > 0) {
                    health -= num;
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${Number(index) + 1}`);
                    isDead = true;
                    break;
                }
                break;
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

solve(
    'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'
)