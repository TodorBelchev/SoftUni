function solve(input) {

    function isValidIndex(i, arr) {
        if (i >= 0 && i < arr.length) { return true }
        return false;
    }

    const pirateShip = input.shift().split('>').map(Number);
    const warShip = input.shift().split('>').map(Number);
    const maxHP = Number(input.shift());
    let isSinked = false;

    for (const line of input) {

        if (line === 'Retire' || isSinked) {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        let index;
        let damage;

        switch (command) {
            case 'Fire':
                index = Number(tokens[1]);
                damage = Number(tokens[2]);

                if (isValidIndex(index, warShip)) {
                    warShip[index] -= damage;

                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        isSinked = true;
                        break;
                    }

                }

                break;
            case 'Defend':
                index = Number(tokens[1]);
                const endIndex = Number(tokens[2]);
                damage = Number(tokens[3]);

                if (isValidIndex(index, pirateShip) && isValidIndex(endIndex, pirateShip)) {

                    for (let i = index; i <= endIndex; i++) {
                        pirateShip[i] -= damage;

                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            isSinked = true;
                            break;
                        }

                    }
                }

                break;
            case 'Repair':
                index = Number(tokens[1]);
                const health = Number(tokens[2]);

                if (isValidIndex(index, pirateShip)) {
                    pirateShip[index] += health;

                    if (pirateShip[index] > maxHP) {
                        pirateShip[index] = maxHP;
                    }

                }

                break;
            case 'Status':
                let count = 0;

                for (const section of pirateShip) {

                    if (section / maxHP < 0.2) {
                        count++;
                    }
                }

                console.log(`${count} sections need repair.`);

                break;
        }
    }

    if (!isSinked) {
        console.log(`Pirate ship status: ${pirateShip.reduce((acc, curr) => acc += curr)}`);
        console.log(`Warship status: ${warShip.reduce((acc, curr) => acc += curr)}`);
    }

}

solve(
    [
        '2>3>4>5>2',
        '6>7>8>9>10>11',
        '20',
        'Status',
        'Fire 2 3',
        'Defend 0 4 11',
        'Repair 3 18',
        'Retire'
    ]
)