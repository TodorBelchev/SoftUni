function solve(input) {
    let players = {};

    input.forEach(line => {
        let [player, cardsString] = line.split(': ');
        let cards = cardsString.split(', ');
        if (!players.hasOwnProperty(player)) {
            players[player] = [];
        }
        cards.forEach(card => {
            if (!players[player].includes(card)) {
                players[player].push(card);
            }
        })
    })

    Object.keys(players).forEach(player => console.log(`${player}: ${getDeckPower(players[player])}`));

    function getDeckPower(arr) {
        let totalPower = 0;
        arr.forEach(card => {
            let cardArr = card.split('');
            let theme = cardArr.pop();
            let cardPower = cardArr.join('');
            let t = 0;
            let p = 0;
            switch (theme) {
                case 'S':
                    t = 4;
                    break;
                case 'H':
                    t = 3;
                    break;
                case 'D':
                    t = 2;
                    break;
                case 'C':
                    t = 1;
                    break;
            }
            switch (cardPower) {
                case 'J':
                    p = 11;
                    break;
                case 'Q':
                    p = 12;
                    break;
                case 'K':
                    p = 13;
                    break;
                case 'A':
                    p = 14;
                    break;
                default:
                    p = cardPower;
                    break;
            }
            totalPower += Number(t) * Number(p);
        })
        return totalPower;
    }
}

solve(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
)